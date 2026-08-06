const xlsx = require('xlsx');

const workbook = xlsx.readFile('d:/Downloads/outfit-theory-backup-main/outfit-theory-promotional-website/outfit book.xlsx');
let allData = {};
workbook.SheetNames.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName];
    allData[sheetName] = xlsx.utils.sheet_to_json(worksheet);
});
const fs = require('fs');
fs.writeFileSync('parsed_outfits.json', JSON.stringify(allData, null, 2));
console.log('done');
