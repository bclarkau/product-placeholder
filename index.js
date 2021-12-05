const express = require('express')
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
	res.send(`Width ${width}, Height ${height}`)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})