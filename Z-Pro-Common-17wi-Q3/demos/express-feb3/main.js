const express = require('Z:/npm/express');
const path = require('path');

const port = 9797;
var app = express();

// app.use(express.static('public/posters'));
// app.use('/posters/movies', express.static('public/posters'));
app.use(express.static('books'));
app.use('/mypublicfolder', express.static('public'));
// app.use('/all', express.static(__dirname));

console.log(`dirname is: ${__dirname}`);

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

app.get('/', (req, res) => {
	res.send('Hello from Home Page');
});

app.get('/nonsense', (req, res) => {
	res.redirect('/');
});

// /welcome
//  send an HTML file
app.get('/welcome', (req, res) => {
	var absPath = path.join(__dirname, 'welcome.html');
	res.sendFile(absPath);
});

// /sayhi/jax 
app.get('/sayhi/:name', (req, res) => {
	// route parameters will ALWAYS live inside
	//   req.params
	res.send(`Hello there, ${req.params.name}`);
});

app.get('/test', (req, res) => {
	var absPath = path.join(__dirname, 'test.html');
	res.sendFile(absPath);
});

app.get('/login', (req, res) => {
	var absPath = path.join(__dirname, 'fake-login.html');
	res.sendFile(absPath);
});

app.get('/userlogin', (req, res) => {
	console.log(req.query);
	res.send(`You are logged in as: ${req.query.username}`);
})

// Must put this AFTER all your other routes
// This will act as the default request handler
app.use((req, res) => {
	res.redirect('/');
});

