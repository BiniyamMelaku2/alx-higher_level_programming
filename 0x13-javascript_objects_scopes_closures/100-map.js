#!/usr/bin/node
// imports an array and computes a new array.
const list = require('./100-data').list;
const map1 = list.map(function (value, index) {
  return value * index;
});
console.log(list);
console.log(map1);
