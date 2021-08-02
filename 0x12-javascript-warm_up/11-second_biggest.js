#!/usr/bin/node
//  a script that searches the second biggest integer in the list of arguments
const process = require('process');
const args = process.argv.slice(2).map(Number).sort((a, b) => a - b);
if (process.argv.length <= 3) {
  console.log(0);
} else {
  console.log(args[args.length - 2]);
}
