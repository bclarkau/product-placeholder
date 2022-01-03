export type ImageCategory = 'tech' | 'toys'
export type ImageLicenses = 'CC-BY-2.0' | 'CC-BY-3.0' | 'CC-BY-SA-2.0' | 'CC-BY-SA-3.0' | 'CC-BY-SA-4.0'

export type Image = {
	id: number
	filename: string
	category: ImageCategory | null
	author: string
	source: string 
	license: ImageLicenses | null
	altered?: string
}

export type Images = Image[]

// TODO: add more images
export const images: Images = [
	{ id: 1, filename: '1.png', category: 'tech', author: 'Wikimedia Commons User:Evan-Amos', source: 'https://commons.wikimedia.org/wiki/File:Laptop-hard-drive-exposed_remix_transparent.png', license: 'CC-BY-SA-3.0' },
	{ id: 2, filename: '2.png', category: 'tech', author: 'Wikimedia Commons User:D-Kuru', source: 'https://commons.wikimedia.org/wiki/File:Sapphire_Radeon_R9_290X-front_oblique_PNr%C2%B00437_remix_transparent.png', license: 'CC-BY-3.0' },
	{ id: 3, filename: '3.png', category: 'tech', author: 'Wikimedia Commons User:17jiangz1', source: 'https://commons.wikimedia.org/wiki/File:ZenFone_6_Mockup.svg', license: 'CC-BY-SA-4.0', altered: 'Converted from SVG to PNG' },
	{ id: 4, filename: '4.png', category: 'tech', author: 'Wikimedia Commons User:Shizhao', source: 'https://commons.wikimedia.org/wiki/File:Zip-100a-transparent.png', license: 'CC-BY-SA-3.0' },
	{ id: 5, filename: '5.png', category: 'tech', author: 'Wikimedia Commons User:Zzubnik', source: 'https://commons.wikimedia.org/wiki/File:Computer_monitor_remix_transparent.png', license: null },
	{ id: 6, filename: '6.png', category: 'tech', author: 'Wikimedia Commons User:Dmitry G', source: 'https://commons.wikimedia.org/wiki/File:Ethernet_cable_remix_crop_rotate_transparent.png', license: 'CC-BY-SA-3.0' },
	{ id: 7, filename: '7.png', category: 'tech', author: 'Wikimedia Commons User:Lucasbosch', source: 'https://commons.wikimedia.org/wiki/File:EIZO_Foris_FG2421_VGA_computer_monitor_displaying_test_pattern.png', license: 'CC-BY-SA-4.0' },
	{ id: 8, filename: '8.png', category: 'tech', author: 'Wikimedia Commons User:Tokyoship', source: 'https://commons.wikimedia.org/wiki/File:Wii_U_Console_and_Gamepad.png', license: 'CC-BY-SA-3.0' },
	{ id: 9, filename: '9.png', category: 'tech', author: 'Wikimedia Commons User:Kevin586', source: 'https://commons.wikimedia.org/wiki/File:LDDVDComparison-mod.png', license: 'CC-BY-SA-3.0' },
	{ id: 10, filename: '10.png', category: null, author: 'Flickr User:Mathew Bajoras (19634988@N07)', source: 'https://www.flickr.com/photos/19634988@N07/4625719273', license: 'CC-BY-SA-2.0' },
	
	
	// { id: 11, filename: '11.png', category: 'tech', author: 'Wikimedia Commons User:', source: '', license: '' },
	// { id: 12, filename: '12.png', category: 'tech', author: 'Wikimedia Commons User:', source: '', license: '' },
]