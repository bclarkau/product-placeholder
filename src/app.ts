import express from 'express'

import { getImageBuffer } from './image'

const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Generate an image')
})

app.get('/:width([0-9]+)/:height([0-9]+)?', (req, res) => {
	const { width, height } = req.params
	const { p, padding, id } = req.query

	getImageBuffer(
		{ 
			width: parseInt(width), 
			height: parseInt(height || width), // if no height provided, use width
			padding: parseInt(p as string || padding as string) || 0,
			id: parseInt(id as string) || null
		}, 
		(buffer) => {
			res.type('png').end(buffer)
		}, 
		(err) => {
			res.status(500).type('png').end()
		}
	)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})