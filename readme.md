# Dominant Colors Extractor

This is a Node.js module that extracts the dominant colors from an image.

## Installation

To use this module in your project, you can install it via npm:

```sh
npm install colorExtractor
```

## Usage

```javascript
const extractDominantColors = require('colorExtractor');

const imageUrl = 'https://example.com/image.jpg';
const numColors = 5;
const numSamplesPerRegion = 10;

extractDominantColors(imageUrl, numColors, numSamplesPerRegion)
  .then((dominantColors) => {
    console.log(dominantColors);
  })
  .catch((error) => {
    console.error(error);
  });
```

The `extractDominantColors` function takes three arguments:

- `imageUrl`: The URL of the image to extract colors from.
- `numColors`: The number of dominant colors to extract.
- `numSamplesPerRegion`: The number of samples to take per region of the image.

The function returns a Promise that resolves to an array of the dominant colors in the format `rgb(r,g,b)`.


## Demo Image

We can display the colors extracted from the image like so:
<img src="https://cdn.gert.me/example-extract-color.png"></img>


## Contributing

Contributions are always welcome! If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/guffelman/colorextractor). If you'd like to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).