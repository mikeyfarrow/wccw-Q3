var fs = require('fs');

// TODO: Re-write the code below to use SYNCHRONOUS file I/O.
// Specifically, you should replace the call to fs.writeFile with
// a call to the synchronous version, fs.writeFileSync.

var message = "I am writing to a file";
fs.writeFile('output.txt', message, function(err) {
    if (err) {
        console.log('Error writing: ' + err);
    }
});
