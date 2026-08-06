const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src/data/outfit.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf8');
const excelData = require('./parsed_excel_all_utf8.json');

const mapping = {
  'first-impression': 'Sheet1',
  'men-in-black': 'Sheet2',
  'old-money-weekend': 'Sheet3',
  'cozy-summer': 'Sheet4',
  'utility-uniform': 'Sheet5',
  'nt2': 'Sheet6'
};

for (const [outfitId, sheetName] of Object.entries(mapping)) {
  const sheet = excelData[sheetName];
  if (!sheet) continue;

  // Row 4 onwards contains the items (index 4 in JSON array if 0-based)
  // Let's dynamically find the link column. In Sheet1 it's __EMPTY_2, in Sheet2 it's __EMPTY_1.
  const headerRow = sheet[3] || {};
  let linkKey = null;
  for (const key in headerRow) {
    if (headerRow[key] && headerRow[key].toUpperCase() === 'LINK') {
      linkKey = key;
    }
  }
  if (!linkKey) {
    // fallback
    linkKey = sheetName === 'Sheet1' || sheetName === 'Sheet6' ? '__EMPTY_2' : '__EMPTY_1';
  }

  const nameKey = Object.keys(sheet[0])[0]; // "OUTFIT 1 " etc

  const validItems = [];
  for (let i = 4; i < sheet.length; i++) {
    const row = sheet[i];
    const name = row[nameKey];
    let link = row[linkKey];
    if (name && link && link !== 'NA' && link.trim().startsWith('http')) {
      validItems.push({ name: name.trim(), link: link.trim() });
    }
  }

  // Now replace in tsContent
  const outfitRegex = new RegExp(`id:\\s*'${outfitId}',[\\s\\S]*?pieces:\\s*\\[([\\s\\S]*?)\\]`);
  const match = outfitRegex.exec(tsContent);
  if (match) {
    let piecesStr = match[1];
    let index = 0;
    const pieceRegex = /({[\s\S]*?name:\s*'([^']+)'[\s\S]*?buyUrl:\s*'([^']+)'[\s\S]*?})/g;
    
    const newPiecesStr = piecesStr.replace(pieceRegex, (pieceMatch) => {
      if (index < validItems.length) {
        const item = validItems[index];
        let updated = pieceMatch.replace(/name:\s*'[^']+'/, `name: '${item.name}'`);
        updated = updated.replace(/buyUrl:\s*'[^']+'/, `buyUrl: '${item.link}'`);
        index++;
        return updated;
      }
      return pieceMatch;
    });

    tsContent = tsContent.replace(match[1], newPiecesStr);
  }
}

fs.writeFileSync(tsFilePath, tsContent);
console.log('outfit.ts updated successfully!');
