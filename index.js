const express = require('express')
const fabric = require("fabric").fabric

const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Generate an image')
})

app.get('/:width([0-9]+)', (req, res) => {
	const { width } = req.params
	res.send(`Width ${width}`)
})

app.get('/:width([0-9]+)/:height([0-9]+)', (req, res) => {
	const { width, height } = req.params
	// res.send(`Width ${width}, Height ${height}`)

	var canvas = new fabric.StaticCanvas(null, { width, height })

	fabric.Image.fromURL(`file://${__dirname}/img/1.png`, (img) => {

		// insert image
		const maxWidth = parseInt(width)
		const maxHeight = parseInt(height)
		
		const aspectRatio = Math.min(maxWidth / img.width, maxHeight / img.height)
	
		const scaledWidth = img.width * aspectRatio
		const scaledHeight = img.height * aspectRatio
	
		const left = (maxWidth > scaledWidth) ? ((Math.round(maxWidth) - Math.round(scaledWidth)) / 2) : 0
		const top = (maxHeight > scaledHeight) ? ((Math.round(maxHeight) - Math.round(scaledHeight)) / 2) : 0
	
		img.scale(aspectRatio)
		img.set({ top, left })
	
		canvas.setBackgroundImage(img, () => canvas.renderAll())

		// return image
		const dataUrl = canvas.toDataURL()
		
		canvas.dispose()
	
		const regex = /^data:.+\/(.+)base64,(.*)$/
		const matches = dataUrl.match(regex)
		const ext = matches[1]
		const data = matches[2]
	
		const buffer = Buffer.from(data, 'base64')
	
		res.type('png')
		res.end(buffer)
	})
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})