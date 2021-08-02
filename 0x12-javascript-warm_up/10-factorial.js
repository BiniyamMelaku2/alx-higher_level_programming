#!/usr/bin/node
//  a script that computes and prints a factorial
const process = require('process');
function factorial (a) {
  if (isNaN(a) || a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}
console.log(factorial(Number(process.argv[2])));
