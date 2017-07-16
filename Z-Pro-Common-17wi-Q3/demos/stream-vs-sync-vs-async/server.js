const http = require('http');
const fs = require('fs');

const port = 3030;

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url);

    if (req.url === '/sync') {

        res.statusCode = 200;
        var fileContents = fs.readFileSync('Node.js_in_Action1.pdf');
        res.end(fileContents);

    } else if (req.url === '/async') {

        res.statusCode = 200;
        fs.readFile('Node.js_in_Action2.pdf', (err, fileContents) => {
        	if (err) {
        		console.log(err);
        		return;
        	}
        	res.end(fileContents);
        });

    } else if (req.url === '/stream') {

        res.statusCode = 200;
        var stream = fs.createReadStream('Node.js_in_Action3.pdf');
        stream.pipe(res);
        // fs.createReadStream('Node.js_in_Action3.pdf').pipe(res);

    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(port);
