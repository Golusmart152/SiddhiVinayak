const https = require('https');
const fs = require('fs');
const path = require('path');

const categories = [
  { id: "air_compressor", unsplashId: "photo-1590959651373-a3db0f38a961" },
  { id: "pressure_washer", unsplashId: "photo-1591151601662-793309a9be87" },
  { id: "hydraulic_power_pack", unsplashId: "photo-1581091226825-a6a2a5aee158" },
  { id: "bike_lift", unsplashId: "photo-1581092160562-40aa08e78837" },
  { id: "vacuum_cleaner", unsplashId: "photo-1504328345606-18bbc8c9d7d1" },
  { id: "wheel_alignment", unsplashId: "photo-1517524008697-84bbe3c3fd98" },
  { id: "tyre_changer", unsplashId: "photo-1530124566582-a618bc2615dc" },
  { id: "pneumatic_tools", unsplashId: "photo-1589739900243-4b52cd9b10df" },
  { id: "pressure_gauge", unsplashId: "photo-1584285418504-0041f0440212" },
  { id: "recoil_hose", unsplashId: "photo-1621905251189-08b45d6a269e" },
  { id: "battery_charger", unsplashId: "photo-1620714223084-8fcacc6dfd8d" },
  { id: "multimeter", unsplashId: "photo-1601524909162-4f748d8d249f" },
  { id: "tools_kit", unsplashId: "photo-1530124602817-069bc41d244a" },
  { id: "tool_trolley", unsplashId: "photo-1590473031965-14f013d868a1" },
  { id: "parts_cleaner", unsplashId: "photo-1632733711679-5292d6863670" },
  { id: "workbench", unsplashId: "photo-1504917595217-d4dc5efa61df" },
  { id: "nitrogen_machine", unsplashId: "photo-1621905252507-b35222caee5c" }
];

const downloadDir = path.join(__dirname, 'images', 'categories');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

async function downloadImage(id, unsplashId) {
  const url = `https://images.unsplash.com/${unsplashId}?auto=format&fit=crop&w=800&q=80`;
  const filePath = path.join(downloadDir, `${id}.jpg`);
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${id}.jpg`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${id}: ${res.statusCode}`);
        resolve(); // Continue with others
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const cat of categories) {
    await downloadImage(cat.id, cat.unsplashId);
  }
  console.log('All images downloaded successfully!');
}

main().catch(console.error);
