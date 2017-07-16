const sqlite3 = require('Z:/npm/sqlite3');

const simpsons = new sqlite3.Database('Z:/sql/sample-databases/simpsons.db');

function gotSomeRows(err, rows) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(rows);
}

simpsons.all('SELECT * FROM students', gotSomeRows);

const twitter = new sqlite3.Database('fake-twitter.db');
twitter.serialize(() => {
    twitter.run('CREATE TABLE IF NOT EXISTS User (username TEXT PRIMARY KEY, password TEXT NOT NULL)');
    twitter.run('DELETE FROM User');
    twitter.run('INSERT INTO User VALUES ("jax", "meow")');
    twitter.run('INSERT INTO User VALUES ("jax", "meow")', (err) => {
    	if (err) {
    		console.log(err);
    	}
    });
    twitter.all('SELECT * FROM User', gotSomeRows);
});


const chatroom = new sqlite3.Database('databases/chatroom.db');

chatroom.serialize(() => {
	chatroom.run('CREATE TABLE IF NOT EXISTS Message (word TEXT)');
	chatroom.run('INSERT INTO Message VALUES ("nonsense")');
	chatroom.all('SELECT * FROM Message', gotSomeRows);
});
