var fs = require('fs');

function doItTwice(someFunction) {
	console.log("About to call your function 2x...");
	someFunction();
	someFunction();
}

doItTwice(function() {
	console.log("1 + 1 = " + (1 + 1));
});

doItTwice(() => { 
	console.log('This is an arrow function'); 
});

// To re-write as an arrow function:
// 		1. Remove the "function" keyword
//		2. Put an "=>" after the parameter list
fs.writeFile('output.txt', 'This is a demo file', (err) => {
	if (err) {
		console.log('Error writing: ' + err);
	}
});

var myArray = [1,2,3,4,5];
var myDoubledArray = myArray.map((num) => { return num * 2; });
console.log("Here is the new array: " + myDoubledArray);

var petNames = ['jax', 'freddie', 'radar'];

// If your function is only one line of code that 
// just returns some value, you can write it as an
// arrow function with this shorthand:
var petSayings = petNames.map((name) => (name + ' says hi'));
console.log(petSayings);

// The above code is equivalent to:
// 		var petSayings = petNames.map((name) => {
// 			return name + ' says "hi"';
// 		});

petSayings.forEach((petSays) => {
	console.log(petSays);
});

petNames.forEach((name) => {
	console.log(name + " says hi!");
});

var numStringArray = ["12", "54", "23", "1", "0", "-12"];
var numsPlusTwo = numStringArray.map((numStr) => {
	return parseInt(numStr) + 2;
});
var sum = 0;
numsPlusTwo.forEach((num) => {
	sum = sum + num;
})
console.log("sum = " + sum);