var fs = require('fs');

// TODO: Re-write the code to use all ASYNCHRONOUS file IO.
// Specifically, you should:
// 		replace all calls to fs.readFileSync with calls to fs.readFile
//      replace all calls to fs.writeFileSync with calls to fs.writeFile

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

