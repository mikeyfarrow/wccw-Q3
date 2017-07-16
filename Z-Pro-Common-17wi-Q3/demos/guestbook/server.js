/*

POST /add
	add their entry to our guestbook

GET /browse
	send back all of the previous entries

*/

const express = require('Z:/npm/express');
const bodyParser = require('Z:/npm/body-parser');
const port = 8080;

var Entry = function(reqBody) {
    this.name = reqBody.name;
    this.message = reqBody.message;
    this.rating = reqBody.rating;

    this.toHTMLString = function() {
        return `<div>
        <h1>${this.name}</h1>
		<p>Rating: ${this.rating}</p>
		<p>${this.message}</p>
		</div>`;
    };
}

var entries = [];

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.use(express.static('public/'));

app.post('/add', (req, res) => {
    console.log(req.body);
    entries.push(new Entry(req.body));
    res.redirect('/browse');
});

app.get('/browse', (req, res) => {
	var htmlList = entries.map(entry => entry.toHTMLString());
    res.send(htmlList.join('\r\n'));
})
