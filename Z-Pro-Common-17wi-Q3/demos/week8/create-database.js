const sqlite3 = require('Z:/npm/sqlite3');

var db = new sqlite3.Database(':memory:');

db.run(
	`CREATE TABLE User (
		username TEXT PRIMARY KEY,
		password TEXT NOT NULL
	);

	CREATE TABLE Message ( 
		message_id INTEGER PRIMARY KEY,
		sender TEXT REFERENCES User(username),
		recipient TEXT REFERENCES User(username),
		time_sent TEXT DEFAULT CURRENT_TIMESTAMP,
		message TEXT NOT NULL
	);`, (err) => {
	if (err) {
		console.log(err);
	} else {

		

		db.run(`INSERT INTO User VALUES ('freddie', 'woof')`);
		db.all('SELECT * FROM User', (err, rows) => {
			console.log(rows);
		});
	}
});


