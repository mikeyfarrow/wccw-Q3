const express = require('Z:/npm/express');

var app = express();

app.use(express.static(__dirname + '/public'));

const port = 3000;
var server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

app.get('/oops', (req, res) => {
	res.json({ message: "I did it again" });
});

app.get('/quotes', (req, res) => {
	console.log(req.url);
	console.log(req.query);
	res.send('Coming soon');
});

