// "Arrow Functions" are a shorthand for defining functions

var fs = require('fs');

// Passing an anonymous function
fs.readFile('path/to/file', 'utf-8', function(err, data) {
	// do stuff..
});

// Passing an arrow function
fs.readFile('path/to/file', 'utf-8', (err, data) => {
	// do stuff..
});

// Passing a function reference
fs.readFile('path/to/file', 'utf-8', handleReadFile);

// Variable assignment statement
//    it assigns a function *expression* to the variable
//    myHandler
var myHandler = function(err, data) {
	// does some stuff...
};

// Here's an arrow function:
//		no need to use the 'function' keyword
var myHandlerArrow = (err, data) => {
	// body of the function...
	// does stuff...
};

// Function declaration
function handleReadFile(err, data) {
	// does stuff...
}

// Parameters:
// 	cb - a callback function that doesn't take any parameters
function callMyFunction(cb) {
	console.log('I am about to call your function');
	cb();
}

callMyFunction(function() {
	console.log('Haha!');
});

callMyFunction(() => {
	console.log('This is my arrow function version');
});