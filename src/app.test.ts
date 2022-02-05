import request from 'supertest'
import app from './app'
import { images } from './assets'

describe('Endpoints', () => {

	it('redirects to homepage', done => {
		request(app)
			.get('/')
			.expect(302)
			.expect('Location', 'https://www.productplaceholder.com')
			.end(done)
	})

	it('returns the list of images', done => {
		request(app)
			.get('/images')
			.expect(200)
			.expect(res => {
				expect(res.body).toEqual(images)
			})
			.end(done)
	})

	it('returns a placeholder image', done => {
		request(app)
			.get('/100/100')
			.expect(200)
			.expect(res => {
				expect(res.body).toBeInstanceOf(Buffer)
			})
			.end(done)
	})

})