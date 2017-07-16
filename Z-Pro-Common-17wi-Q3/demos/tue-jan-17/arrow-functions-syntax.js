/*
Arrow Functions
----------------

Syntax:
	(param1, param2, …, paramN) => { statements }
	(param1, param2, …, paramN) => expression
	         // equivalent to:
			 (param1, param2, …, paramN) => { return expression; }

Parentheses are optional when there's only one parameter:
	(singleParam) => { statements }
	singleParam => { statements }

A function with no parameters requires parentheses:
	() => { statements }
	() => expression		// equivalent to: () => { return expression; }
*/

var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

var gasLengths = a.map(gas => gas.length);
console.log(gasLengths);

// [
// 	{name: "Hydrogen", length: 8},
// 	{name: "Helium", length: 6}
// ]

// var gasObjArray = a.map(function(gas) {
// 	return { name: gas, length: gas.length };
// });
var gasObjArray = a.map(gas => ({ name: gas, length: gas.length }));
var gasObjArray2 = a.map(gas => { 
	return { name: gas, length: gas.length };
});

console.log(gasObjArray);
console.log(gasObjArray2);

// var gasLengths2 = a.map((gas) => { return gas.length; });
// console.log(gasLengths2);

// Arrow functions can have either a "concise body" or the usual "block body".
// 		In a concise body, only an expression is needed, and an implicit
//				return is attached.
// 		In a block body, you must use an explicit return statement.

// concise syntax, implied "return"
var func = x => x * x;

// with block body, explicit "return" needed
var func = (x, y) => { return x + y; }; 


// Returning object literals
// Keep in mind that returning object literals using the concise syntax:
//		 param => { object: literal }
// will not work as expected:
var func = () => { foo: 1 }; // Calling func() returns undefined!

// This is because the code inside braces ({}) is parsed as a sequence
// of statements (i.e. foo is treated like a label, not a key in an object
// literal).
// Remember to wrap the object literal in parentheses:
var func = () => ({ foo: 1 });

// Some examples:
var arr = [5, 6, 13, 0, 1, 18, 23];
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var doubled = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]
