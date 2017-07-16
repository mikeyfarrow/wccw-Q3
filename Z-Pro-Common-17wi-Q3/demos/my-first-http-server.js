const http = require('http');
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

var numVisits = 0;
var server = http.createServer(function(req, res) {
    console.log(`Incoming request: ${req.url}`);
    // handles the request
    // sends some data as the response

    if (req.url !== "/favicon.ico") {
        numVisits++;
    }
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end(`You are visitor #${numVisits}`);

});

server.listen(port, hostName, function() {
    console.log('Server is listening');
});
