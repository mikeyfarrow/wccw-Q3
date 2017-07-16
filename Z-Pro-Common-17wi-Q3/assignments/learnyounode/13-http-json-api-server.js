const http = require('http');
const urlLib = require('url');

const port = process.argv[2] || 3030;

var server = http.createServer(handleRequest);
server.listen(port, function() {
    console.log('Listening on http://localhost:' + port);
});

function handleRequest(req, res) {
    var urlParsed = urlLib.parse(req.url, true);
    var time = new Date(urlParsed.query.iso);
    if (urlParsed.pathname === '/api/parsetime') {
        sendJSON(res, {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        });
    } else if (urlParsed.pathname === '/api/unixtime') {
        sendJSON(res, { unixtime: time.getTime() });
    } else {
        notFound(res);
    }
}

function sendJSON(res, jsonData) {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(jsonData));
}

function notFound(res) {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end('404 Not Found');
}
