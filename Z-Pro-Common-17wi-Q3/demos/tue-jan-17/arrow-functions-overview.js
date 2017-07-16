
var myFunc = function(param1, param2) {
	console.log(param1 + ', ' + param2);
};

var myFuncArrow = (param1, param2) => {
	// do stuff...
}

// The "long" way
var doubleANumber = (num) => {
	return num * 2;
};

// If your function takes only one param, you can
// leave out the parentheses around your parameter:
var doubleANumber2 = num => {
	return num * 2;
}

// The "concise" syntax: You can leave out the { } and the return
// statement if your function is just a one-liner that returns a value
var doubleANumber3 = num => num * 2;

var gasArray = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];
var lengths = gasArray.map(function(gas) {
	return gas.length;
});
console.log(lengths);
var lengths2 = gasArray.map(gas => gas.length);
console.log(lengths2);

// The sort method:
//	takes a function as a parameter

// gasArray.sort(function(gas1, gas2) {
// 	// -		gas1 is before gas2
// 	// +		gas1 is after gas2
// 	// 0		they're the same
// 	//			7			8
// 	return gas1.length - gas2.length;
// });
gasArray.sort((gas1, gas2) => gas1.length - gas2.length);
console.log(gasArray);