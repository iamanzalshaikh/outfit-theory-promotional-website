const fs = require('fs');
const path = require('path');

const parsed = JSON.parse(fs.readFileSync('parsed_outfits.json', 'utf8'));

// We need to map the images to the correct items.
// First let's just create a basic map of sheet to outfit id
const sheetToId = {
    "Sheet1": "first-impression",
    "Sheet2": "men-in-black",
    "Sheet3": "old-money-weekend",
    "Sheet4": "cozy-summer",
    "Sheet5": "utility-uniform",
    "Sheet6": "nt2"
};

const folderMap = {
    "first-impression": "First Impression",
    "men-in-black": "men in black",
    "old-money-weekend": "old money weekend",
    "cozy-summer": "cozy summer",
    "utility-uniform": "utility uniform",
    "nt2": "NT2"
};

// ... we could just output the parsed data to see what we have.
