#!/usr/bin/node
// a script that prints the first argument passed to it
const process = require('process');
const args = process.argv.slice(2);
if (typeof process.argv[2] === 'undefined') {
  console.log('No argument');
} else {
  console.log(args.toString());
}
