var fs = require('fs');

// setting path and encoding to read from file
const path = '../../assets/db/data.txt';
const encoding = "utf8";
var dataToWrite = 'This is to be written'

// readFile reads from the path with specified encoding
// by default encoding option is null and encoding format uses raw buffer
// readFile uses error first callback - it is executed once file is read
fs.readFile(path, encoding, function (err, data) {
    if (err) throw err;
    console.log(data);
});

// writeFile writes to the file specified in the path
// the second parameter would write the contents in the file
// by default the file will be overwritten by the contents to be updated
// if specified file does not exists then new file will be created and data would be written to that file
fs.writeFile(path, dataToWrite, function (err) {
    if (err) throw err;
    console.log('File written successfully!');
});

// third parameter we can specify options, here 'a' option open the file in append mode
fs.writeFile(path, dataToWrite, { flag: 'a' }, function (err) {
    if (err) throw err;
    console.log('File Appended successfully!');
});
