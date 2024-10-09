// const fs = require("fs");
// fs.readFile("JSPracticeQuestions.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

const fs = require('fs');
//you may assume input.txt is in the same folder
// const rd = fs.createReadStream("input.txt");
// rd.close();
// rd.on("close", () => console.log('readableStream close event'))
// fs.readFile('input.txt', "utf-8", (error, data) => {
//     if (error) console.log(error);
//     else console.log(data)
// });
// setTimeout(() => console.log("this is setTimeout"), 5000);
// setTimeout(() => console.log("this is setTimeout"), 0);
 
// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//     console.log("this is setImmediate 2")
//     Promise.resolve().then(() => console.log('Promise.resolve inside setImmediate'));
// });
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// Promise.resolve().then(() => {
//     console.log('Promise.resolve 2')
//     process.nextTick(() => console.log('nextTick inside Promise'));
// });
// process.nextTick(() => console.log('nextTick 1'));


// import fs from "fs";

process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => console.log("promise 1"));

setImmediate(() => {
  console.log("setImmediate 1");
});

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) console.log("there is an error. can not read from file");
  else {
    console.log(data);
  }
});
