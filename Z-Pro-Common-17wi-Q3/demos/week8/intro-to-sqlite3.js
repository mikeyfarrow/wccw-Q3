/*
File: Z:/demos/Q3/week8/intro-to-sqlite3.js 

NodeJS program that interacts with a SQL database.
*/

const sqlite3 = require('Z:/npm/sqlite3');
const express = require('Z:/npm/express');

const app = express();
const port = 8787;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.get('/movie/:name', (req, res) => {
	console.log(req.params.name);
	findDirector(req.params.name, (err, rows) => {
		if (err) {
			res.send('Error!')
		} else {
			res.send(rows);
		}
	});
});

app.get('/year/:year', (req, res) => {
	findByYear(req.params.year, (err, rows) => {
		if (err) {
			res.send('Error!')
		} else {
			res.send(rows);
		}
	});
});

var db = new sqlite3.Database('Z:/sql/sample-databases/imdb_small.db');

// db.all('SELECT * FROM movies LIMIT 10', (err, rows) => {
// 	console.log('db.all got some data: ' + JSON.stringify(rows));
// });

// db.each('SELECT * FROM movies LIMIT 10', (err, row) => {
// 	console.log('db.each got some data: ' + JSON.stringify(row));
// });

function findDirector(movieName, cb) {
    var sqlFightClub =
        `SELECT * FROM directors
		JOIN movies_directors ON movies_directors.director_id = directors.id
		JOIN movies ON movies.id = movies_directors.movie_id
		WHERE movies.name = '${movieName}'`;

    db.all(sqlFightClub, cb);
}

function findByYear(year, cb) {
    /*
    SELECT * FROM movies
    WHERE year = 1999
    */
    db.all(`SELECT * FROM movies WHERE year = ${year}`, cb)
}

function findByYears(years) {
    db.all(`SELECT * FROM movies WHERE year IN (${years.join()})
    	ORDER BY year`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(rows);
    })
}

findByYears([1999, 2000, 2005]);

// findDirector('Fight Club');
// findDirector('Aliens');
// findDirector('Pulp Fiction');
