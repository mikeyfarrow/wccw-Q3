const http = require('http');
const fs = require('fs');

const port = 3030;

const server = http.createServer(handleRequest);
server.listen(port, function() {
    console.log('Server listening on ' + port);
})

function handleRequest(req, res) {
    console.log(req.url);

    if (req.url === '/') {
    	res.writeHead(200, {'Content-type': 'text/plain'});
    	res.end('Hello there');
    } else {
        var filename = 'public' + req.url;
        console.log(filename);
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                console.log('Error reading: ' + err);
                return;
            }
            res.end(data);
        })
    }

}

function notFound(res) {
    res.writeHead(404, { 'Content-type': 'text/html' });
    fs.readFile('public/404.html', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading: ' + err);
            return;
        }
        res.end(data);
    })
}
