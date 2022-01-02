import { fabric } from 'fabric'

type GetImageBufferProps = {
	width: number
	height: number
	padding: number
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
	{ width, height, padding, min = 100, max = 1000 }: GetImageBufferProps, 
	onDone: GetImageBufferCallbackProps, 
	onError: GetImageBufferErrorProps
) => {

	const { canvas, maxWidth, maxHeight } = getCanvas({ width, height, min, max })

	fabric.Image.fromURL(`file://${__dirname}/assets/1.png`, (image: fabric.Image) => {
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

const getCanvas = ({ width, height, min, max }: GetCanvasProps) => {
	const maxWidth = Math.max(min, Math.min(width, max))
	const maxHeight = Math.max(min, Math.min(height, max))

	return {
		maxWidth, 
		maxHeight,
		canvas: new fabric.StaticCanvas(null, { width: maxWidth, height: maxHeight })
	}
}