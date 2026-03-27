import Jimp from 'jimp';

async function removeBackground() {
  const image = await Jimp.read('D:/siddhi vinayak/images/Logo/ssve_pages-to-jpg-0001.jpg');
  
  // Make all near-white pixels transparent (threshold around 245)
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // If pixel is white/near-white, make it transparent
    if (r > 240 && g > 240 && b > 240) {
      this.bitmap.data[idx + 3] = 0;
    }
  });

  await image.writeAsync('D:/siddhi vinayak/images/Logo/ssve_transparent_logo.png');
  console.log('Success! Logo background removed and saved to ssve_transparent_logo.png');
}

removeBackground();
