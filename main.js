// colorextract.js

const { createCanvas, loadImage } = require('canvas');

async function extractDominantColors(imageUrl, numColors, numSamplesPerRegion) {
  return new Promise(async (resolve, reject) => {
    try {
      const img = await loadImage(imageUrl);

      const canvas = createCanvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const pixels = imageData.data;

      const regionWidth = Math.floor(img.width / numSamplesPerRegion);
      const regionHeight = Math.floor(img.height / numSamplesPerRegion);

      const colorCounts = {};

      for (let y = 0; y < img.height; y += regionHeight) {
        for (let x = 0; x < img.width; x += regionWidth) {
          const sampleX = Math.min(x, img.width - 1);
          const sampleY = Math.min(y, img.height - 1);
          const i = (sampleY * img.width + sampleX) * 4;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const color = `rgb(${r},${g},${b})`;

          colorCounts[color] = (colorCounts[color] || 0) + 1;
        }
      }

      const sortedColors = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);

      const dominantColors = sortedColors.slice(0, numColors);

      resolve(dominantColors);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = extractDominantColors;
