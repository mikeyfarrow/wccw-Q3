const http = require('http');
const urlLib = require('url');

const port = 3030;

// Creates a server object. All incoming requests to the server will be
// handled by the function 'handleRequest'
var server = http.createServer(handleRequest);

// Tell the server to begin listening on the specified port.
// The second parameter is a callback function that will be invoked once the
// server is up and running.
server.listen(port, function() {
    console.log('Listening on http://localhost:' + port);
});

// Responds to incoming requests
function handleRequest(req, res) {
    var urlParsed = urlLib.parse(req.url, true);

    if (urlParsed.pathname === '/blah/some/path') {

        sendJSON(res, { message: 'Hi', magicNum: 42 });

    } else if (urlParsed.pathname  === '/blah/whatever') {

        sendJSON(res, { message: 'Hello', magicColor: 'Green' });

    } else {
        notFound(res);
    }
}

function sendJSON(res, jsonData) {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify(jsonData));
}

function notFound(res) {
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.end('404 Not Found');
}