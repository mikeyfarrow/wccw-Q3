
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// we want: 'a long time ago in a galaxy far far away'

/*
	a, long				->  a long
	a long, time 		-> a long time
	a long time, ago  	-> a long time ago
*/
var fullString = epic.reduce((prev, cur) => {
	console.log(`prev: ${prev}, cur: ${cur}`);
	return prev + ' ' + cur;
}, "");
console.log('=========');
console.log(fullString);
