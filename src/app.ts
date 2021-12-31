import express from 'express'

import { getImageBuffer } from './image'

const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Generate an image')
})

app.get('/:width([0-9]+)', (req, res) => {
	const { width } = req.params

	getImageBuffer(
		{ width: parseInt(width), height: parseInt(width) }, 
		(buffer) => {
			res.type('png').end(buffer)
		}, 
		(err) => {
			res.status(500).type('png').end()
		}
	)
})

app.get('/:width([0-9]+)/:height([0-9]+)', (req, res) => {
	const { width, height } = req.params

	getImageBuffer(
		{ width: parseInt(width), height: parseInt(height) }, 
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