var fs = require('fs');

var fileContents = fs.readFileSync('data/pets.csv', 'utf-8');

var lines = fileContents.trim().split('\r\n');
var splitLines = lines.map(line => line.split(','));

var labels = splitLines.shift();

var petObjArray = splitLines.map(petArray => 
	({ name: petArray[0], species: petArray[1], breed: petArray[2] })
);

// To convert an object into a string, you must call the
// JSON.stringify method.
var message = JSON.stringify(petObjArray);
fs.writeFileSync('pets.json', message);




