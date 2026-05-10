const fs = require('fs');
const path = require('path');
const https = require('https');

const projects = [
  { id: 'b9d8039c-d012-4964-9b7a-db8e29f296c0', url: 'https://capstone-order-tracking-fe.vercel.app', name: 'capstone' },
  { id: 'e9ed6dcf-1e5c-4cb6-a211-25cf74496e17', url: 'https://appointment-system-nu.vercel.app', name: 'appointment' },
  { id: '4d63f3c7-dcc3-499a-9434-2a10baccf88b', url: 'https://kiosk-eight-orcin.vercel.app', name: 'kiosk' },
  { id: 'eabfa824-9716-47bc-95ad-b5fda13593c0', url: 'https://danie-s-coffee.vercel.app', name: 'danie' },
  { id: 'c42f3f53-a170-4edc-8a22-210d040f178a', url: 'https://enterprise-architecture.vercel.app', name: 'enterprise' }
];

const destDir = path.join(__dirname, 'frontend', 'public', 'images', 'projects');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301 || response.statusCode === 307) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        return reject(new Error('Status: ' + response.statusCode));
      }
      
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const p of projects) {
    console.log(`Downloading screenshot for ${p.name}...`);
    const apiUrl = `https://api.microlink.io/?url=${p.url}&screenshot=true&meta=false&embed=screenshot.url`;
    const destPath = path.join(destDir, `${p.name}.png`);
    
    try {
      await download(apiUrl, destPath);
      console.log(`Saved ${p.name}.png`);
      
      // Update the database
      const http = require('http');
      await new Promise((res, rej) => {
        const req = http.request(`http://localhost:5001/api/projects/${p.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' }
        }, res);
        req.on('error', rej);
        req.write(JSON.stringify({ image_url: `/images/projects/${p.name}.png` }));
        req.end();
      });
      console.log(`Updated DB for ${p.name}`);
      
    } catch (e) {
      console.error(`Failed for ${p.name}:`, e);
    }
  }
}

main();
