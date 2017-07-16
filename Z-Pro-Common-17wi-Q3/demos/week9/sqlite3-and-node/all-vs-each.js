const sqlite3 = require('Z:/npm/sqlite3');

const db = new sqlite3.Database('Z:/sql/sample-databases/simpsons.db');

function gimmeAllRows(err, rows) {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`ALL got: ${JSON.stringify(rows)}`);
};

function gimmeOneRow(err, row) {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`EACH got: ${JSON.stringify(row)}`);
};

var selectJax = `SELECT * FROM students where name = 'Jax'`;
db.all(selectJax, gimmeAllRows);

db.each(selectJax, gimmeOneRow);