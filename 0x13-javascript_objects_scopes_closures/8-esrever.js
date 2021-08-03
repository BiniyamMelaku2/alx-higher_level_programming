#!/usr/bin/node
// returns the number of occurrences in a list:
exports.esrever = function (list) {
  const revList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    revList.push(list[i]);
  }
  return revList;
};
