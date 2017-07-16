const cats = [
    { name: 'Mojo', months: 84 },
    { name: 'Mao­Mao', months: 34 },
    { name: 'Waffles', months: 4 },
    { name: 'Pickles', months: 6 }
];

// initial value: { kittens: [], cats: [] }
// final result:
// 	{
// 		kittens: ["Waffles", "Pickles"],
// 		cats: ["Mojo", "Mao-mao"]
// 	}

var isKitten = cat => cat.months < 7;
var getName = cat => cat.name;

cats.reduce((prev, cur) => {
	if (isKitten(cur)) {
		prev.kittens.push(cur.name);
	} else {
		prev.cats.push(cur.name);
	}
	return prev;
}, { cats: [], kittens: [] });



// Use map and filter to get an array of names
// of each cat that is less than 7 months old
// 	output: ["Waffles", "Pickles"]
var kittenNames = cats.filter(isKitten).map(getName);