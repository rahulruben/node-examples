// Importing http module from the node's inbuild packages
var http = require('http');

// Creating a constant variable for port number
const port = 3000;

// using http variable to create a Http server which takes a callback function as an argument
var server = http.createServer(function (req, res) {
    // req - request object which comes from the client
    // res - reponse object which we can send to the client
    // writeHead - to set the header of response object
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // write - writes to the buffer 
    res.write('Hello World!');

    // end - flushes the buffer to the destination - client
    res.end();
});

// setting the server to listen for connection requests on PORT 3000
server.listen(port, function() {
    console.log('Listening on PORT ' + port);
});
