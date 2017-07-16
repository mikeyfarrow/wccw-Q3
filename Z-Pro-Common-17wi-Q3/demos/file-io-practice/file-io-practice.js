var fs = require('fs');

// TODO: Read the contents of dracula.txt and write a new file
// called "dracula-count.txt" with the total number of characters
// in the dracula.txt file. For an example, see the code in:
// 		Z:\demos\Q3\read-and-write-file\read-and-write-2.js

var fileContents = fs.readFileSync('dracula.txt', 'utf-8');

/*
	Summary of dracula.txt
		characters: 99999
		lines: 99999
		words: 99999
*/
var numChar = fileContents.length;
var numLines = fileContents.split('\n').length;
var wordArray = fileContents.split(/[ \t\n\r]+/);
var numWords = wordArray.length;

var message =
	'Summary of dracula.txt\n' +
	'\tcharacters: ' + numChar + '\n' +
	'\tlines:      ' + numLines + '\n' +
	'\twords:      ' + numWords;

fs.writeFileSync('dracula-summary.txt', message);
