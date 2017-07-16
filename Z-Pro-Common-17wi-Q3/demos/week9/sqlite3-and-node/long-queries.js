const sqlite3 = require('Z:/npm/sqlite3');

const imdb = new sqlite3.Database('Z:/sql/sample-databases/imdb_small.db');

function printRows(err, rows) {
	if (err) {
		console.log(err);
		return;
	}
	console.log(rows);
	console.log('==================');
}

var whoDirected =
`SELECT *
FROM directors
JOIN movies_directors ON directors.id = movies_directors.director_id
JOIN movies ON movies.id = movies_directors.movie_id
WHERE movies.name = ?;
`;

// imdb.all(whoDirected, 'Fight Club', printRows);
// imdb.all(whoDirected, 'Fargo', printRows);
// imdb.all(whoDirected, 'Vanilla Sky', printRows);

// Write a query with placeholders to search for all movies
// by a given director.
// var directedBy = ``;
// imdb.all(directedBy, 'David', 'Fincher', printRows);
// imdb.all(directedBy, 'Joel', 'Coen', printRows);

// Write a query to find all of the actors who have appeared in
// a movie with a given actor
var whoActedWith =
`SELECT DISTINCT actors.first_name, actors.last_name
	FROM actors
	JOIN roles ON roles.actor_id = actors.id
	WHERE roles.movie_id IN
	    (SELECT movie_id FROM actors
	     JOIN roles ON roles.actor_id = actors.id
	     WHERE actors.first_name = ? AND actors.last_name = ?); 
`;
imdb.all(whoActedWith, 'Kevin', 'Bacon', printRows);
imdb.all(whoActedWith, 'Tom', 'Cruise', printRows);