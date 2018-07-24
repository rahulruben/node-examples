var fs = require('fs');

// setting path and encoding to read from file
const path = '../../assets/db/data.txt';
const encoding = "utf8";
var dataToWrite = 'This is to be written'

// readFileSync reads the file using the path and encoding format and returns contents of the path
var fileContents = fs.readFileSync(path, encoding);
console.log(fileContents)


// writeFileSync writes the file using the path which overwrites the file contents
fs.writeFileSync(path, dataToWrite);
fileContents = fs.readFileSync(path, encoding);
console.log(fileContents)


// writeFileSync writes the file using the path which appends contents to the file
fs.writeFileSync(path, dataToWrite, { flag: 'a' });
fileContents = fs.readFileSync(path, encoding);
console.log(fileContents)
