var fs = require('fs');

// Three parameters:
// 		1. Path to the file you want to read
//		2. The character encoding of the file (as a string)
//			almost always 'utf-8'
//      3. A callback function
fs.readFile('hello.txt', 'utf-8', handleFile);
fs.readFile('hell0.txt', 'utf-8', handleFile);
fs.readFile('read-file.js', 'utf-8', handleFile);

function handleFile(err, data) {
    if (err) {
    	console.log('Error occurred: ' + err);
    } else {
        console.log(data);
    }
}

// Here is how to read files synchronously - these method calls
// will block and the program will halt until the files have been
// read:
// 
// var myData = fs.readFileSync('hello.txt', 'utf-8');
// console.log(myData);
// var errorData = fs.readFileSync('hell0.txt', 'utf-8');
// console.log(errorData);

