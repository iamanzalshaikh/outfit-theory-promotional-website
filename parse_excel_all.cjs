const XLSX = require('xlsx');
const workbook = XLSX.readFile('outfit book.xlsx');
const allData = {};
workbook.SheetNames.forEach(sheetName => {
  allData[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
});
console.log(JSON.stringify(allData, null, 2));
