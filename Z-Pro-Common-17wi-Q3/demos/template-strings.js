"use strict";

const fs = require('fs');

var pet = {
	name: "Freddie",
	breed: "Jack Russell"
};

console.log("My dog " + pet.name + " is a " + pet.breed);
console.log(`My dog ${pet.name} is a ${pet.breed}`);
console.log(`My dog {pet.name} is a {pet.breed}`);

console.log(`${pet.name}'s name has ${pet.name.length} letters`);
console.log(pet.name + "'s name has " + pet.name.length + " letters");

console.log(`It Ć doesn't matter / if you use " or ' inside`);
console.log("€5 for lunch");

var num = 5;
const otherNum = 10;

num = num + 10;
num = 34;

otherNum = 12;
console.log(otherNum);

