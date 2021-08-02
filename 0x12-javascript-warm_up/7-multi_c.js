#!/usr/bin/node
//  a script that prints x times “C is fun”
const process = require('process');
const num = Math.floor(Number(process.argv[2]));
if (isNaN(num)) {
  consol.log();
} else {
  for (let i = 0; i < num; i++) {
    console.log('C is fun');
  }
}
