const express = require('Z:/npm/express');
const bodyParser = require('Z:/npm/body-parser');
const join = require('path').join;

var users = [
    { username: 'Jax', password: 'meow' },
    { username: 'Freddie', password: 'woof' }
];

const port = 9000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.get('/', (req, res) => {
	console.log(users);
    res.sendFile(join(__dirname, 'login-POST.html'));
});

app.get('/newuser', (req, res) => {
    res.sendFile(join(__dirname, 'create-account.html'));
})

// app.get('/login', (req, res) => {
// 	res.send(`${req.query.username} made a GET request to /login`);
// });

app.post('/login', (req, res) => {
	console.log(users);
    var match = findMatch(req.body);
    if (match) {
    	if (match.password === req.body.password) {
    		res.send(`Welcome back ${match.username}`);
    	} else {
    		res.send(`Password incorrect for ${match.username}`);
    	}
    } else {
    	res.send('No such user');
    }
    // res.send(`POSTed to /login: ${req.body}`);
});

app.post('/create', (req, res) => {
	var match = findMatch(req.body);
	console.log(match);
	if (!match) {
		users.push(req.body);
		res.send(`Welcome back ${req.body.username}`);
	} else {
		res.send(`Username ${match.username} taken`);
	}
});

function findMatch(userAttempt) {
	var matchingUsers = users.filter(user => user.username === userAttempt.username);
	return matchingUsers[0];
}

// Must put this AFTER all your other routes
// This will act as the default request handler
app.use((req, res) => {
    res.redirect('/');
});
