import { fabric } from 'fabric'
import { images } from './assets'

type GetImageBufferProps = {
	width: number
	height: number
	padding: number
	id: number | null
	min?: number
	max?: number
}

type GetImageBufferCallbackProps = {
	(buffer: Buffer): void
}

type GetImageBufferErrorProps = {
	(error: string): void
}

export const getImageBuffer = (
	{ width, height, padding, id, min = 100, max = 1000 }: GetImageBufferProps, 
	onDone: GetImageBufferCallbackProps, 
	onError: GetImageBufferErrorProps
) => {

	const { canvas, maxWidth, maxHeight } = getCanvas({ width, height, min, max })
	const filename = getImageFilename(id)

	fabric.Image.fromURL(`file://${__dirname}/assets/${filename}`, (image: fabric.Image) => {
		const { width: imgWidth, height: imgHeight } = image

		if(!imgWidth || !imgHeight) {
			return onError('Image could not be loaded')
		}
		
		// set image to center of canvas
		const center = canvas.getCenter()
		image.set({ 
			top: center.top, 
			left: center.left,
			originX: 'center',
			originY: 'center' 
		})

		// scale image according to canvas dimensions and any padding
		const imgAspectRatio = imgWidth / imgHeight
		const canvasAspectRatio = maxWidth / maxHeight
		if(imgAspectRatio <= canvasAspectRatio) {
			if(imgHeight > maxHeight) {
				image.scaleToHeight(maxHeight - padding * 2)
			}
		} else {
			if(imgWidth > maxWidth) {
				image.scaleToWidth(maxWidth - padding * 2)
			}
		}

		canvas.setBackgroundImage(image, () => canvas.renderAll())

		// get image data url 
		const dataUrl = canvas.toDataURL()

		// get rid of the canvas, we don't need it anymore
		canvas.dispose() 

		// convert data url to buffer
		const regex = /^data:[^\/]+\/([^;]+);base64,(.*)$/
		const matches = dataUrl.match(regex)

		if(!matches) {
			return onError('Image could not be converted to useable format')
		} 

		// pass the buffer back to the endpoint via callback 
		onDone(Buffer.from(matches[2], 'base64'))
	})
}

type GetCanvasProps = {
	width: number
	height: number
	min: number
	max: number
}

export const getCanvas = ({ width, height, min, max }: GetCanvasProps) => {
	const maxWidth = Math.max(min, Math.min(width, max))
	const maxHeight = Math.max(min, Math.min(height, max))

	return {
		maxWidth, 
		maxHeight,
		canvas: new fabric.StaticCanvas(null, { width: maxWidth, height: maxHeight })
	}
}

export const getImageFilename = (id: number | null) => {
	// if the ID matches a valid image, return the filename
	if(id && (id >= 1 || id <= images.length)) {
		return images.find(img => img.id === id)?.filename
	}

	// otherwise return a random one
	const min = 0
	const max = Math.floor(images.length - 1)
	const index = Math.floor(Math.random() * (max - min + 1)) + min
	return images[index].filename
}