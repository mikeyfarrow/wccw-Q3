var today = new Date(Date.now());

var xmas = new Date('December 25, 2016');

var march = new Date('3-15-2000');

console.log(march);
march.setDate(march.getDate());
console.log(march);

console.log(today);
today.setDate(today.getDate() + 14);
console.log(today);


switch (43) {
	case 0:
		console.log('Woo, it was 0');
		break;
	case 1:
		console.log('Woo, 1');
		break;
	case 2:
		console.log('That was 2');
		break;
	default:
		console.log('I did not have a case for that');
}

var name = "Joe";
switch (name) {
	case "Mikey":
		console.log('You are the teacher');
		break;
	default:
		console.log('You are someone else');
}

switch (today.getDay()) {
	case 0:
		console.log('Sunday, boo');
		break;
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log('Waiting for the weekend');
		break;
	default:
		console.log('Woo, weekend!');
}