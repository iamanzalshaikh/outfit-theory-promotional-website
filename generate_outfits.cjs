const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public/assets');
const outfitFiles = fs.readdirSync(assetsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const looks = outfitFiles.map(folder => {
  const id = folder.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const files = fs.readdirSync(path.join(assetsDir, folder)).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
  const heroImage = '/assets/' + folder + '/' + (files.includes('1.png') ? '1.png' : files[0]);
  const coverImage = heroImage;
  
  const pieces = files.filter(f => f !== '1.png').map((file, idx) => ({
    id: id + '-' + (idx + 1),
    name: 'Piece ' + (idx + 1),
    image: '/assets/' + folder + '/' + file,
    buyUrl: '#'
  }));
  
  return {
    id,
    name: folder,
    tagline: 'New Collection',
    description: 'A beautifully curated look.',
    coverImage,
    heroImage,
    pieces
  };
});

let tsContent = fs.readFileSync(path.join(__dirname, 'src/data/outfit.ts'), 'utf8');

const regex = /export const looks: OutfitLook\[\] = \[[\s\S]*?\]\n/;
const newContent = 'export const looks: OutfitLook[] = ' + JSON.stringify(looks, null, 2).replace(/\"([^(\")]+)\":/g, '$1:') + '\n';

fs.writeFileSync(path.join(__dirname, 'src/data/outfit.ts'), tsContent.replace(regex, newContent));
console.log('Successfully updated outfit.ts!');
