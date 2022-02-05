import { fabric } from 'fabric'

import { getImageBuffer, getCanvas, getImageFilename } from './image'

describe('Image generation', () => {

	it('generates a PNG buffer', done => {
		getImageBuffer(
			{ width: 100, height: 100, padding: 0, id: null },
			(buffer) => {
				expect(buffer).toBeDefined()
				expect(buffer).toBeInstanceOf(Buffer)
				done()
			},
			() => {}
		)
	}, 15000)

})

describe('Canvas creation', () => {

	it('returns the canvas object', () => {
		const min = 100
		const max = 1000 
		const res = getCanvas({ width: 100, height: 100, min, max })

		expect(res.maxWidth).toBe(100)
		expect(res.maxHeight).toBe(100)
		expect(res.canvas).toBeInstanceOf(fabric.StaticCanvas)
	})

})

describe('Asset filename', () => {

	it('returns the correct filename', () => {
		const filename = getImageFilename(1)
		expect(filename).toBe('1.png')
	})

	it('returns a random filename', () => {
		const filename = getImageFilename(null)
		expect(filename).toMatch(/\d+\.png/)
	})

})