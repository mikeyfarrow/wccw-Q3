var fs = require('fs');

/*
	1. Use fs.readdir to find out what is in the demos folder
	2. Make a new file and write to it the list of files from step 1
*/

fs.readdir('Z:/demos/Q2', function(err, fileList) {
	if (err) {
		console.log("Error reading dir: " + err);
	} else {
		fs.writeFile('demo-contents.txt', fileList, function(err) {
			if (err) {
				console.log("Error writing file: " + err);
			}
		})
	}
});