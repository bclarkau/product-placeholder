export type ImageCategory = 'tech' | 'cars' | 'clothing' | 'music' | 'food' | 'antiques' | 'cosmetics'
export type ImageLicenses = 'CC0-1.0' | 'CC-BY-2.0' | 'CC-BY-3.0' | 'CC-BY-SA-2.0' | 'CC-BY-SA-3.0' | 'CC-BY-SA-4.0' | 'Pixabay License'

export type Image = {
	id: number
	filename: string
	category: ImageCategory | null
	author: string
	source: string 
	license: ImageLicenses | null
	altered: string | null
}

export type Images = Image[]

// TODO: add more images
export const images: Images = [
	{ id: 1, filename: '1.png', category: 'tech', author: 'Wikimedia Commons User: Evan-Amos', source: 'https://commons.wikimedia.org/wiki/File:Laptop-hard-drive-exposed_remix_transparent.png', license: 'CC-BY-SA-3.0', altered: null },
	{ id: 2, filename: '2.png', category: 'tech', author: 'Wikimedia Commons User: D-Kuru', source: 'https://commons.wikimedia.org/wiki/File:Sapphire_Radeon_R9_290X-front_oblique_PNr%C2%B00437_remix_transparent.png', license: 'CC-BY-3.0', altered: null },
	{ id: 3, filename: '3.png', category: 'tech', author: 'Wikimedia Commons User: 17jiangz1', source: 'https://commons.wikimedia.org/wiki/File:ZenFone_6_Mockup.svg', license: 'CC-BY-SA-4.0', altered: 'Converted from SVG to PNG' },
	{ id: 4, filename: '4.png', category: 'tech', author: 'Wikimedia Commons User: Shizhao', source: 'https://commons.wikimedia.org/wiki/File:Zip-100a-transparent.png', license: 'CC-BY-SA-3.0', altered: null },
	{ id: 5, filename: '5.png', category: 'tech', author: 'Wikimedia Commons User: Zzubnik', source: 'https://commons.wikimedia.org/wiki/File:Computer_monitor_remix_transparent.png', license: null, altered: null },
	{ id: 6, filename: '6.png', category: 'tech', author: 'Wikimedia Commons User: Dmitry G', source: 'https://commons.wikimedia.org/wiki/File:Ethernet_cable_remix_crop_rotate_transparent.png', license: 'CC-BY-SA-3.0', altered: null },
	{ id: 7, filename: '7.png', category: 'tech', author: 'Wikimedia Commons User: Lucasbosch', source: 'https://commons.wikimedia.org/wiki/File:EIZO_Foris_FG2421_VGA_computer_monitor_displaying_test_pattern.png', license: 'CC-BY-SA-4.0', altered: null },
	{ id: 8, filename: '8.png', category: 'tech', author: 'Wikimedia Commons User: Tokyoship', source: 'https://commons.wikimedia.org/wiki/File:Wii_U_Console_and_Gamepad.png', license: 'CC-BY-SA-3.0', altered: null },
	{ id: 9, filename: '9.png', category: 'tech', author: 'Wikimedia Commons User: Kevin586', source: 'https://commons.wikimedia.org/wiki/File:LDDVDComparison-mod.png', license: 'CC-BY-SA-3.0', altered: null },
	{ id: 10, filename: '10.png', category: 'cars', author: 'Flickr User: Mathew Bajoras', source: 'https://www.flickr.com/photos/19634988@N07/4625719273', license: 'CC-BY-SA-2.0', altered: null },
	{ id: 11, filename: '11.png', category: 'clothing', author: 'Wikimedia Commons User: Amada44', source: 'https://commons.wikimedia.org/wiki/File:Semi_dry_suit_-_2604.png', license: 'CC-BY-SA-3.0', altered: null },
	{ id: 12, filename: '12.png', category: 'music', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/wireless-microphone-radio-microphone-2907453/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 13, filename: '13.png', category: 'food', author: 'Pixabay User: Biju Toha', source: 'https://pixabay.com/photos/dish-plate-meal-lunch-healthy-1883501/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 14, filename: '14.png', category: 'food', author: 'Pixabay User: Jan Alexander', source: 'https://pixabay.com/photos/coffee-cup-and-saucer-black-coffee-1572739/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 15, filename: '15.png', category: 'food', author: 'Pixabay User: Koltrein', source: 'https://pixabay.com/photos/fruits-and-vegetables-fruit-kiwi-1274079/', license: 'Pixabay License', altered: null },
	{ id: 16, filename: '16.png', category: 'food', author: 'Pixabay User: Jan Alexander', source: 'https://pixabay.com/photos/coffee-cup-and-saucer-black-coffee-1572738/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 17, filename: '17.png', category: 'antiques', author: 'Pixabay User ID: 27707', source: 'https://pixabay.com/photos/antique-antique-table-table-old-961102/', license: 'Pixabay License', altered: null },
	{ id: 18, filename: '18.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/clock-pocket-watch-gold-valuable-2905507/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 19, filename: '19.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/old-phone-phone-connection-to-call-3137153/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 20, filename: '20.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/old-camera-camera-photo-camera-old-2878634/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 21, filename: '21.png', category: 'antiques', author: 'Pixabay User ID: 27707', source: 'https://pixabay.com/photos/antique-sideboard-antique-furniture-948527/', license: 'Pixabay License', altered: null },
	{ id: 22, filename: '22.png', category: 'food', author: 'Pixabay User: Digital Designer', source: 'https://pixabay.com/photos/isolated-apples-fruit-food-healthy-1049849/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 23, filename: '23.png', category: 'cosmetics', author: 'Pixabay User: Biju Toha', source: 'https://pixabay.com/photos/shampoo-shampoo-bottle-1860642/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 24, filename: '24.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/frame-carved-decorative-creation-2476118/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 25, filename: '25.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/frame-carved-decorative-creation-2476118/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 26, filename: '26.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/frame-carved-decorative-creation-2476118/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 27, filename: '27.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/frame-carved-oval-gold-design-2476122/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 28, filename: '28.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/frame-carved-oval-gold-design-2476122/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 29, filename: '29.png', category: 'antiques', author: 'Pixabay User: Alexander Lesnitsky', source: 'https://pixabay.com/photos/frame-carved-oval-gold-design-2476122/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 30, filename: '30.png', category: 'cars', author: 'Pixabay User: Biju Toha', source: 'https://pixabay.com/illustrations/jeep-vehicle-car-drive-transport-6029278/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 31, filename: '31.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/renault-8-classic-car-ancient-4699203/', license: 'Pixabay License', altered: null },
	{ id: 32, filename: '32.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/car-ancient-vintage-citro%c3%abn-2cv-4722210/', license: 'Pixabay License', altered: null },
	{ id: 33, filename: '33.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/car-old-vintage-seat-fura-2070742/', license: 'Pixabay License', altered: null },
	{ id: 34, filename: '34.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/photos/truck-pickup-vehicle-vintage-5449609/', license: 'Pixabay License', altered: null },
	{ id: 35, filename: '35.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/scooter-moto-motorcycle-classic-4818046/', license: 'Pixabay License', altered: null },
	{ id: 36, filename: '36.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/photos/car-sports-car-porsche-green-3744250/', license: 'Pixabay License', altered: null },
	{ id: 37, filename: '37.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/photos/car-ancient-vintage-citroen-2cv-3816790/', license: 'Pixabay License', altered: null },
	{ id: 38, filename: '38.png', category: 'antiques', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/radio-transistor-vintage-design-2083396/', license: 'Pixabay License', altered: null },
	{ id: 39, filename: '39.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/photos/motorcycle-montesa-classic-bike-2187580/', license: 'Pixabay License', altered: null },
	{ id: 40, filename: '40.png', category: 'cars', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/photos/van-vintage-jeep-4x4-1645997/', license: 'Pixabay License', altered: null },
	{ id: 41, filename: '41.png', category: 'antiques', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/projector-cinema-ancient-movie-old-2083282/', license: 'Pixabay License', altered: null },
	{ id: 42, filename: '42.png', category: 'antiques', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/peseta-eagle-spain-francoism-1980212/', license: 'Pixabay License', altered: 'Cropped' },
	{ id: 43, filename: '43.png', category: 'antiques', author: 'Pixabay User: Marc Pascual', source: 'https://pixabay.com/illustrations/radio-valves-ancient-vintage-6063414/', license: 'Pixabay License', altered: null },
	{ id: 44, filename: '44.png', category: 'music', author: 'Wikimedia Commons User: Ahrtaler2', source: 'https://commons.wikimedia.org/wiki/File:Blockfl%C3%B6te.png', license: 'CC0-1.0', altered: null },
	{ id: 45, filename: '45.png', category: 'tech', author: 'Wikimedia Commons User: Sun Ladder', source: 'https://commons.wikimedia.org/wiki/File:01_Spiral_CFL_Bulb_2010-03-08_(transparent_back).png', license: 'CC-BY-SA-3.0', altered: null },
]