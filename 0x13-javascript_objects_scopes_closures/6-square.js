#!/usr/bin/node
// a class Square that inherits from Square
module.exports = class Square extends require('./5-square') {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let myStr = '';
      for (let j = 0; j < this.width; j++) {
        myStr = myStr + c;
      }
      console.log(myStr);
    }
  }
};
