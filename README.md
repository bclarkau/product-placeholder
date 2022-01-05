# Product Placeholder

Simple [Express](https://expressjs.com/) app to generate mock product PNGs for use in quick e-commerce mockups.

* Transparent background
* Customizable dimensions
* Options for padding and choosing specific images
* No installation necessary, just use the below URLs

[View Demo](https://productplaceholder.com)

## How to use

Replace the width value to create a square image

```
https://prd.place/400
```

...or add both width and height to get a custom size

```
https://prd.place/400/600
```

### Options

Add blank space around the product with padding (or just p!)

```
https://prd.place/400?padding=80
```

Get a specific image by passing the ID (see [image list](https://productplaceholder.com/images))

```
https://prd.place/400?id=37
```

## Installation

Installation is only required for development/contributing purposes.

### Quick start 

Clone this repo to your machine and run 
``` 
yarn && yarn watch 
```

### Adding images

1. Add PNG image files to the `src/assets` folder. 
2. Add the image details to the [images index](https://github.com/bclarkau/product-placeholder/blob/main/src/assets/index.ts#L17). This list is used to keep track of author credit and license details.
3. Rebuild the app to copy images to the `dist` folder 

``` 
yarn build 
```

## Contributing
Pull requests are welcome for bug fixes and new features.

* If adding new images, make sure they have an appropriate [Creative Commons](https://creativecommons.org/) license.
* For major changes, please [open an issue](https://github.com/bclarkau/product-placeholder/issues) first.
