// //using npm
// var oneLinerJoke = require('one-liner-joke');

// console.log(oneLinerJoke.getRandomJoke());

//using npm 2nd time
var figlet = require("figlet");

figlet("Mr Kamran", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});