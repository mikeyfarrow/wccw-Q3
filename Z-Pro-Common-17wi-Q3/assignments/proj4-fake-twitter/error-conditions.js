const sqlite3 = require('Z:/npm/sqlite3');

const db = new sqlite3.Database('databases/fake-twitter.db');
db.run('PRAGMA foreign_keys = ON');
/*
	1. Test the conditions yourself w/ JS
	2. Ask the database (with a SELECT stmt)
	3. Use constraints on your tables
*/


///////////////////////////////////////////////////////////
// ADD:
// Message is too long (>100 characters)
var longTweet = `asdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfasasdfasdfasdfas`;
db.run(`INSERT INTO Tweet (user, message) VALUES ('bugs', ?)`, longTweet, (err) => {
	console.log(err);
})


///////////////////////////////////////////////////////////
// SUBSCRIBE:
// Feed doesn't exist
// Already following that feed
db.run(`INSERT INTO Following VALUES ('bugs', 'kjasdflkj')`, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('It worked');
	}
});

///////////////////////////////////////////////////////////
// UNSUBSCRIBE:
// Feed doesn't exist
// Already not following that feed

///////////////////////////////////////////////////////////
// REGISTER:
// Login or Password are empty or too long
// Username taken
// Username contains characters other than letters/digits
