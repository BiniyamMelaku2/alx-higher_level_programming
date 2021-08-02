#!/usr/bin/node
//  a script that prints a square
const process = require('process');
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    let line = '';
    for (let c = 0; c < size; c++) {
      line += 'X';
    }
    console.log(line);
  }
}
