var fs = require('fs');

// TODO: Re-write all the anonymous functions in this code
// to instead use the "Arrow Function" syntax. In total,
// there are two functions that will need to be changed.

function doItTwice(someFunction) {
    console.log('I am about to call your function twice...');
    someFunction();
    someFunction();
}

doItTwice(function() {
    console.log('This is a boring function');
});


var message = "I am writing to a file";
fs.writeFile('output.txt', message, function(err) {
    if (err) {
        console.log('Error writing: ' + err);
    }
});
