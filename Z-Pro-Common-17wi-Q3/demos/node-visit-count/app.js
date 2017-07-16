/* Project Description:
  This app tracks how many time the site has been viewed, and displays that information to users.

  The count is saved in the counter.txt file.

  When there is a request to the server, the contents of counter.txt are read into the program as a string. The file contents are converted to an integer, then incremented (increased by 1) to account for the current visit. The file is then updated with the new value, and the page displays a message to the user telling them how many times it's been viewed.

  Your job is to make that happen! Right now, the app just displays the string "Hello There!" to users.
*/

const http = require('http');
// TODO: require the fs library here and assign it to a variable.

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  /* TODO:
      1. Read in the contents of the counter.txt file as a string and assign to a variable. Convert to an integer. Increment by 1.
      2. Write to the counter.txt file the new integer's value.
      3. Instead "Hello There!", display a message that says how many times the page has been viewed.
  */

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello There!');
});

// No changes to this section of the code are necessary.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
