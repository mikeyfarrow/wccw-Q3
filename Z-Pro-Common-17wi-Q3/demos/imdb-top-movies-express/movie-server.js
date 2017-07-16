// TODO: require the libraries fs, http, url

// TODO: read the file movies.json using fs.readFileSync
//		 and parse the contents as JSON (using JSON.parse(...))

/**
 * Respond to requests made to the following URLs:
 *
 *  /movies/id
 *      to find movie whose id is tt0110912, make a GET request to:
 *          /movies/id?imdbID=tt0110912
 *
 *  /movies/search
 *      find movies whose plot contains a keyword or phrase your choice.
 *      For example:
 *          /movies/search?keyword=guitar
 *
 **/

// Returns the movie whose ID matches the parameter imdbID.
// If there is no such movie, return false
function getById(imdbID) {

}

// Returns a list of movies whose Plot property contains the 
// given keyword. The keyword is case-insensitive.
function getByKeyword(keyword) {

}

function sendJSON(res, jsonData) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonData, null, '\t'));
}

function notFound(res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
}

/*
Each movie object has the same properties as the sample below.
Your code will use the properties Rank, Year, imdbID, and Plot

{
	"Title": "Pulp Fiction",
	"Year": "1994",
	"Rated": "R",
	"Released": "14 Oct 1994",
	"Runtime": "154 min",
	"Genre": "Crime, Drama",
	"Director": "Quentin Tarantino",
	"Writer": "Quentin Tarantino (story), Roger Avary (story), Quentin Tarantino",
	"Actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
	"Plot": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who...",
	"Language": "English, Spanish, French",
	"Country": "USA",
	"Awards": "Won 1 Oscar. Another 60 wins & 65 nominations.",
	"Poster": "posters/tt0110912.jpg",
	"Metascore": "94",
	"imdbRating": "8.9",
	"imdbVotes": "1,376,761",
	"imdbID": "tt0110912",
	"Type": "movie",
	"Response": "True",
	"Rank": "4"
}
*/


