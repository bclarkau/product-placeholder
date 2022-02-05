import { fabric } from 'fabric'

import { getImageBuffer, getCanvas, getImageFilename } from '../src/image'

describe('Image generation', () => {

	it('generates a PNG buffer', done => {
		getImageBuffer(
			{ width: 100, height: 100 },
			(buffer) => {
				expect(buffer).toBeDefined()
				expect(buffer).toBeInstanceOf(Buffer)
				expect(buffer.byteLength).toBeGreaterThan(0)
				expect(buffer.byteLength).toBeLessThan(1000)
				done()
			}
		)
	})

	it('generates a PNG buffer with padding', done => {
		getImageBuffer(
			{ width: 100, height: 100, padding: 20 },
			(buffer) => {
				expect(buffer).toBeDefined()
				expect(buffer).toBeInstanceOf(Buffer)
				done()
			}
		)
	})

	it('generates a PNG buffer with specified ID', done => {
		getImageBuffer(
			{ width: 100, height: 100, id: 2 },
			(buffer) => {
				expect(buffer).toBeDefined()
				expect(buffer).toBeInstanceOf(Buffer)
				done()
			}
		)
	})

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
		const filename = getImageFilename()
		expect(filename).toMatch(/\d+\.png/)
	})

})