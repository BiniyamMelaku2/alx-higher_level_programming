#!/usr/bin/node
// a script that prints the first argument passed to it
const process = require('process');
const args = process.argv.slice(2);
if (args == '') {
  console.log('No argument');
} else {
  console.log(args.toString());
}
