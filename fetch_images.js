const https = require('https');
const fs = require('fs');

const models = [
  "KARCHER HDS 8/18-4 M high pressure washer",
  "Karcher HDS 8/17 C",
  "Karcher High Pressure Car Washer",
  "Karcher Car Washer",
  "Karcher Puzzi 10/1 Plus",
  "Karcher HD 5/11 Cage",
  "IndiaMart Bike Washer Pump"
];

async function fetchImageUrl(query) {
  return new Promise((resolve) => {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/src="([^"]*external-content\.duckduckgo\.com[^"]+)"/);
        if (match) {
          // Extracted proxy url, can decode or just use directly
          resolve(match[1].replace(/&amp;/g, '&'));
        } else {
          resolve("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80");
        }
      });
    }).on('error', () => {
      resolve("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80");
    });
  });
}

async function main() {
  const results = {};
  for (let model of models) {
    console.log(`Fetching image for: ${model}`);
    const imgUrl = await fetchImageUrl(model);
    results[model] = imgUrl;
  }
  
  fs.writeFileSync('image_results.json', JSON.stringify(results, null, 2));
  console.log('Done!');
}

main();
