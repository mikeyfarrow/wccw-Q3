var sqlite3 = require('Z:/npm/sqlite3');

var db = new sqlite3.Database(':memory:');

var createTable = `CREATE TABLE Message (
	id INTEGER PRIMARY KEY,
	message TEXT,
	time TEXT DEFAULT CURRENT_TIMESTAMP
);`;

db.run(createTable, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    db.run(`INSERT INTO Message (message) VALUES ('Hello world')`);
    db.run(`INSERT INTO Message (message) VALUES ('This is another message')`);
    db.all('SELECT * FROM Message', (err, rows) => {
    	console.log(rows);
    });
});

/*

CREATE TABLE Message (
	id INTEGER PRIMARY KEY,
	message TEXT,
	time TEXT DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Message (message) VALUES ('Hello world')

*/
