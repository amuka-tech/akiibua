const fs = require('fs');
const path = require('path');

const images = [
  '/arena_interior.png',
  '/matchday_exterior.png',
  '/esplanade.png',
  '/museum_exhibition.png',
  '/vip_lounge.png',
  '/fc_bayern_store.png',
  '/arena_catering.png'
];

function getPremiumImage(filePath) {
  let hash = 0;
  for (let i = 0; i < filePath.length; i++) {
    hash = filePath.charCodeAt(i) + ((hash << 5) - hash);
  }
  return images[Math.abs(hash) % images.length];
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('placehold.co')) return;

  const image = getPremiumImage(filePath);

  // 1. Replace Hero image
  content = content.replace(/image="https:\/\/placehold\.co\/[^"]+"/g, `image="${image}"`);
  
  // 2. Replace generic section layout
  content = content.replace(
    /<section className="max-w-7xl mx-auto px-6 py-16">([\s\S]*?)<\/section>/g,
    `<section className="bg-arena-navy py-20 px-6">\n        <div className="max-w-7xl mx-auto">$1</div>\n      </section>`
  );

  // 3. Upgrade generic cards
  // Replaces various padding and shadow values just in case
  content = content.replace(
    /className="bg-white rounded-lg shadow-card p-[^"]+ hover:shadow-[^"]+ transition-shadow"/g,
    `className="group bg-[#111111] rounded-xl shadow-card border border-white/10 p-8 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:-translate-y-1"`
  );

  // 4. Update generic text colors
  content = content.replace(/text-arena-navy/g, 'text-white group-hover:text-arena-red transition-colors');
  content = content.replace(/text-arena-muted/g, 'text-white/70');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Upgraded: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    // Ignore node_modules, .next, etc.
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src', 'app'));
console.log('Done upgrading all pages!');
