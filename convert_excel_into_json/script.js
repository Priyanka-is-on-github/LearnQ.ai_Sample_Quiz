// convert-excel.js
const XLSX = require('xlsx');
const fs = require('fs');

// Read the Excel file from disk
const workbook = XLSX.readFile('./LearnQ.ai Frontend Hiring Question Sample Data.xlsx');

// Pick a sheet – here we’re using the first one
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the sheet data to JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet);

// Write to console or save to a file
console.log(JSON.stringify(jsonData, null, 2));


// Convert JSON data to a string with pretty formatting
const jsonString = JSON.stringify(jsonData, null, 2);

fs.writeFile('quiz_dataset.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('JSON file saved successfully.');
    }
});
