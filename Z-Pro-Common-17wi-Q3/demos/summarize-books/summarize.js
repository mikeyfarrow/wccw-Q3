var fs = require('fs');

// TODO: Read the contents of dracula.txt and write a new file
// called "dracula-count.txt" with the total number of characters
// in the dracula.txt file. For an example, see the code in:
// 		Z:\demos\Q3\read-and-write-file\read-and-write-2.js

var fileNamesArray = fs.readdirSync('books/');

fileNamesArray.forEach(summarizeBook);

/*
	Summary of dracula.txt
		characters: 99999
		lines: 99999
		words: 99999
		avg word length: 
*/
function summarizeBook(fileName) {
    var fileContents = fs.readFileSync('books/' + fileName, 'utf-8');

    var numChar = fileContents.length;
    var numLines = fileContents.split('\n').length;
    var wordArray = fileContents.split(/[ \t\n\r]+/);
    var numWords = wordArray.length;

    var message =
        'Summary of ' + fileName + '\n' +
        '\tcharacters: ' + numChar + '\n' +
        '\tlines:      ' + numLines + '\n' +
        '\twords:      ' + numWords;

    fs.writeFileSync(fileName.split('.')[0] + '-summary.txt', message);
}
