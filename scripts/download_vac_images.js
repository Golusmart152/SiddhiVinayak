const https = require('https');
const fs = require('fs');
const path = require('path');

const products = [
  { id: "karcher_nt_65_2", url: "https://v1.kaercher-media.com/products/16672010/main/1/d0.jpg" },
  { id: "karcher_nt_27_1", url: "https://v1.kaercher-media.com/products/14285000/main/1/d0.jpg" },
  { id: "karcher_nt_22_1", url: "https://abclive1caulfields.s3.amazonaws.com/32bda22a-2ec4-4965-9cac-b75e246468b0/productimage/P-G14308___L.jpg" }
];

const downloadDir = path.join(__dirname, 'images', 'products', 'vacuum-cleaners');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

async function downloadImage(id, url) {
  const filePath = path.join(downloadDir, `${id}.jpg`);
  
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${id}.jpg`);
          resolve(true);
        });
      } else {
        console.error(`Failed to download ${id}: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error for ${id}: ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  for (const prod of products) {
    await downloadImage(prod.id, prod.url);
  }
  console.log('Done!');
}

main().catch(console.error);
