const express = require('Z:/npm/express');
const fs = require('fs');

const port = 5000;

var fileContents = fs.readFileSync('movies.json', 'utf-8');
var movies = JSON.parse(fileContents);

const app = express();
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

app.get('/movies/id/:imdbID', (req, res) => {
    var result = movies.filter(movie => movie.imdbID === req.params.imdbID);
    res.send(result);
});

app.get('/movies/search/:keyword', (req, res) => {
    var results = movies.filter(movie => {
        var plot = movie.Plot.toLowerCase();
        var keyword = req.params.keyword.toLowerCase();
        return plot.indexOf(keyword) > -1;
    });
    res.send(results);
});



// define a route for /movies/summary/:imdbID

function getHtml(movie) {
    var htmlTemplate = `
		<h1></h1>
		<img src="">
		<p>
			Rated:
			Released:
			Actors:
			Plot:
		</p>`;
}
