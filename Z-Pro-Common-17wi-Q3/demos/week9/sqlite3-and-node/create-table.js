const sqlite3 = require('Z:/npm/sqlite3');

var db = new sqlite3.Database(':memory:');

function handleData(err, rows) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(rows);
}

// ERROR: Word table won't exist when we insert into it
// db.run('CREATE TABLE Word (message TEXT)');
// db.run('INSERT INTO Word VALUES ("hi"), ("meow")');

db.run('CREATE TABLE Word (message TEXT)', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    db.run('INSERT INTO Word VALUES ("hi"), ("meow"), ("woof")');
    db.all('SELECT * FROM Word', handleData);
    db.each('SELECT * FROM Word', (err, row) => {
    	console.log(row);
    });
});

db.serialize(() => {
    db.run('CREATE TABLE User (username TEXT, password TEXT)');
    db.run('INSERT INTO User VALUES ("jax", "meow")');
    // db.all('SELECT * FROM User', handleData);
});
