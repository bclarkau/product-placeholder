export type ImageCategory = 'tech' | 'cosmetics'

export type Image = {
	id: number
	filename: string
	category: ImageCategory
}

export type Images = Image[]

// TODO: add more images
export const images: Images = [
	{ id: 1, filename: '1.png', category: 'tech' },
	// { id: 2, filename: '2.png', category: 'tech' },
	// { id: 3, filename: '3.png', category: 'tech' },
	// { id: 4, filename: '4.png', category: 'tech' },
	// { id: 5, filename: '5.png', category: 'tech' },
]