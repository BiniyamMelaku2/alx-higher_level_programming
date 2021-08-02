#!/usr/bin/node
// a script that prints two arguments passed to it, with format: “ is ”
const process = require('process');
console.log(`${process.argv[2]} is ${process.argv[3]}`);
