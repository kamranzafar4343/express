// //using npm
// var oneLinerJoke = require('one-liner-joke');

// console.log(oneLinerJoke.getRandomJoke());

//using npm 2nd time
// var figlet = require("figlet");

// figlet("Mr Kamran", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
// var dafar = "tayyab";

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)