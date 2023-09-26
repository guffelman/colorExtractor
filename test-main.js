// test-main.js

const extractDominantColors = require('./main.js');

const imageUrl = 'http://cdn.gert.me/landscape.jpeg';
const numColors = 5;
const numSamplesPerRegion = 13;

async function main() {
  try {
    const dominantColors = await extractDominantColors(imageUrl, numColors, numSamplesPerRegion);

    // Display dominant colors as circles (removing duplicates)
    const uniqueDominantColors = [...new Set(dominantColors)];
    uniqueDominantColors.forEach(color => {
      console.log(`Dominant Color: ${color}`);
    });
  } catch (error) {
    console.error('Error extracting dominant colors:', error);
  }
}

main();
