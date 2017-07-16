var fs = require('fs');

var fileContents = fs.readFileSync('frankenstein.txt', 'utf-8');
fileContents = fileContents.trim();

/*
Split the book's text one or more of any of the following characters: 
	\s 		any whitespace character
	\W 		any NON-word character (i.e. anything other than a-z, A-Z, 0-9, or _)
	\d 		any digit character
	_		the '_' character
*/
var wordArray = fileContents.split(/[\s\W\d_]+/);

var frequencies = {};

wordArray.forEach((curWord) => {
    curWord = curWord.toLowerCase();
    if (!frequencies[curWord]) {
        frequencies[curWord] = 1;
    } else {
        frequencies[curWord]++;
    }
});
