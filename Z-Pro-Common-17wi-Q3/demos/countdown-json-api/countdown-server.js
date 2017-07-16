const http = require('http');
const urlLib = require('url');

const port = 3030;

var server = http.createServer(handleRequest);
server.listen(port, function() {
	console.log('Listening on http://localhost:' + port);
});

function handleRequest(req, res) {
	console.log('Incoming request for: ' + req.url);
	var urlParsed = urlLib.parse(req.url, true);

	if (urlParsed.pathname === '/countdown/days') {
		sendJSON(res, {days: daysLeft()});
	} else if (urlParsed.pathname  === '/countdown/weeks') {
		sendJSON(res, {weeks: weeksLeft()});
	} else {
		notFound(res);
	}
}

function sendJSON(res, jsonData) {
	res.writeHead(200, {'Content-type': 'application/json'});
	res.end(JSON.stringify(jsonData));
}

function notFound(res) {
	var htmlString = `<html>
<head>
	<title>Page Not Found</title>
	<style>
	body {
		font-family: "Segoe UI", sans-serif;
		background-color: orange;
	}
	</style>
</head>
<body>
	<h1>What??</h1>
	<p>Look elsewhere</p>
	<p>Seriously.</p>
	
</body>
</html>`;
	res.writeHead(404, {'Content-type': 'text/html'});
	res.end(htmlString);
}

function daysLeft() {
	var today = new Date(Date.now());
	var trumpLeaves = new Date('January 20, 2021');

	// var ms = trumpLeaves - today;
	// var days = ms / 1000 / 60 / 60 / 24;
	var days = 0;
	while (today < trumpLeaves) {
		today.setDate(today.getDate() + 1);
		days++;
	}
	return days;
}

function weeksLeft() {
	var weeks = daysLeft() / 7;
	return Math.round(weeks);
}