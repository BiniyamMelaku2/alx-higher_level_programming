#!/usr/bin/node
// a class Rectangle that defines a rectangle with w & h
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let myStr = '';
      for (let j = 0; j < this.width; j++) {
        myStr = myStr + 'X';
      }
      console.log(myStr);
    }
  }
}
module.exports = Rectangle;
