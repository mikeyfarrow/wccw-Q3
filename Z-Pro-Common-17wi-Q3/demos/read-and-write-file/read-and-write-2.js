var fs = require('fs');

// Passing callbacks using arrow functions
fs.readFile('read-and-write.js', 'utf-8', (err, fileContents) => {
    if (err) {
        console.log("Error reading: " + err);
        return;
    }
    var message = "There are " + fileContents.length + " characters in read-and-write.js";
    fs.writeFile('character-count-arrow2.txt', message, (err) => {
        if (err) {
            console.log('Error writing: ' + err);
        }
    });
});


// Passing callbacks using anonymous function expressions
// fs.readFile('read-and-write.js', 'utf-8', handleRead);

// function handleRead(err, fileContents) {
// 	if (err) {
// 		console.log("Error reading: " + err);
// 	} else {
// 		var message = "There are " + fileContents.length + " characters in read-and-write.js";
// 		fs.writeFile('character-count.txt', message, function(err) {
// 			if (err) {
// 				console.log('Error writing: ' + err);
// 			}
// 		})
// 	}
// }
