const urlLib = require('url');

var moodleUrl = 'http://unloop.edu/moodle/course/view.php?id=7';

var w3Url = 'http://w3schools.pro.edu/jsref/jsref_obj_date.html';

var nodeUrl = 'http://unloop.edu/nodejs/url.html';

var localUrl = 'http://localhost:3030/api/parsetime?iso=2013-08-10T12:10:15.474Z';

// var w3UrlParsed = urlLib.parse(w3Url);
// console.log(w3UrlParsed);

// var moodleParsed = urlLib.parse(moodleUrl);
// console.log(moodleParsed);

var localParsed = urlLib.parse(localUrl);
console.log(localParsed.query);

var localParsedWithQuery = urlLib.parse(localUrl, true);
console.log(localParsedWithQuery);
