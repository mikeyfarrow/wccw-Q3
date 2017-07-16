var users = [
	{ fullName: 'George Washington', email: 'george@us.gov' },
    { fullName: 'John Adams', email: 'john@us.gov' },
    { fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
    { fullName: 'James Madison', email: 'james@us.gov' }
];

var final = users.reduce((prev, cur) => {
	prev[cur.fullName] = cur.email;
	// console.log(`prev: ${JSON.stringify(prev)}`);
	// console.log(`cur: ${JSON.stringify(cur)}`);
	return prev;
}, {});
console.log(final);
/*
We want to change up the structure of our users so that we can use the users' full name as the key and have their email as the value.

{ 
	'George Washington': 'george@us.gov',
  	'John Adams': 'john@us.gov',
  	'Thomas Jefferson': 'thomas@us.gov',
  	'James Madison': 'james@us.gov'
}
*/
