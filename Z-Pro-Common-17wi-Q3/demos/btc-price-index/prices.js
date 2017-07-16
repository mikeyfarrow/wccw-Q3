var fs = require('fs');

fs.readFile('btc.json', 'utf-8', handleJson);

function handleJson(err, data) {
	if (err) {
		console.log('Error reading file.');
	} else {
		var priceObj = JSON.parse(data);

		var maxPrice = 0;
		var minPrice = 0;
		for (var day in priceObj) {
			var priceToday = priceObj[day];
			console.log(priceToday);
		}
	}
}