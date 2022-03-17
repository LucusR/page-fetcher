const request = require('request');
const fs = require("fs");

let command = process.argv.slice(2);
let URL = command[0];
let localPath = command[1];

// console.log(command)
// console.log(URL)
// console.log(localPath)

request(URL, (error, response, body) => {
  // console.log("error", error)
  // console.log("response,", response.body)
  fs.writeFile(URL, response.body, function () {
    console.log(`Downloaded and saved ${fs.stat(localPath)} to ${localPath}`);
  }
  )
});



// const request = require('request');
// request('http://www.google.com', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });