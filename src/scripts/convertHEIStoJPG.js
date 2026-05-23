const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

const dir = path.join(__dirname, 'public', 'italy');

(async () => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (!file.toLowerCase().endsWith('.heic')) continue;

    try {
      const inputPath = path.join(dir, file);

      const inputBuffer = fs.readFileSync(inputPath);

      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9
      });

      const outputPath = path.join(
        dir,
        file.replace(/\.heic$/i, '.jpg')
      );

      fs.writeFileSync(outputPath, outputBuffer);

      console.log(`Converted ${file}`);
    } catch (err) {
      console.error(`Failed ${file}`, err);
    }
  }
})();