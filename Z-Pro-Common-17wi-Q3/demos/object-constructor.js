/*
	1. are there any local variables with that name?
	2. are there any params with that name?
	3. are there any global vars with that name?
*/
var Dog = function(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.printDogInfo = function() {
    	console.log(this.toString());
    };
    this.toString = function() {
    	return `${this.name} is a ${this.breed} who weighs ${this.weight}`;
    }
};

var freddie = new Dog('Freddie', 'Jack Russell', 12);
var radar = new Dog('Radar', 'German Shepherd', 20);

var dogs = [
    freddie,
    radar,
    new Dog('Spot', 'German Shepherd', 60)
];

freddie.printDogInfo();
radar.printDogInfo();

console.log('----');
dogs.forEach(function(dog) {
	dog.printDogInfo();
});
console.log('----');
dogs[2].printDogInfo();

console.log('----');
// [1,2,3,4,5,6].filter(num => num < 5);
var spotDogs = dogs.filter(dog => dog.name === 'Spot');
spotDogs.forEach(dog => {
	dog.printDogInfo();
})

console.log('----');

var sheps = dogs.filter(dog => dog.breed === 'German Shepherd');
sheps.forEach(dog => {
	dog.printDogInfo();
});
