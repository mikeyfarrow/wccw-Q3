var express = require('Z:/npm/express/index.js');
var fs = require('fs');

var app = express();
app.use("/", express.static('public/'));

// TODO: read the contents of the file "data/price-data.csv"
//       using fs.readFileSync


// TODO: split the contents of the file into an array of the lines
//		hint: use the .split() method
//      (see the example in Z:\demos\Q3\pets-csv\pets-csv-to-json.js)

// TODO: convert the data from the file into an array of JavaScript objects
// 	Your array should looks something like this:
// [
// 	 {
// 		"date": "2010-07-18",
// 		"price": "0.0858"
// 	},
// 	{
// 		"date": "2010-07-19",
// 		"price": "0.0808"
// 	},
// 	{
// 		"date": "2010-07-20",
// 		"price": "0.0747"
// 	}
// ]


app.get('/prices', function(req, res) {
	// TODO: send the array of price objects as a response
    res.send(null);
});

var server = app.listen(3030, function() {
    console.log("Listening on port %s...", server.address().port);
});
