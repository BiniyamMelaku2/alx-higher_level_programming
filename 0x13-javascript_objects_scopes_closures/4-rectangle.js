#!/usr/bin/node
// a class Rectangle that defines a rectangle with w, h, print, rotate, double
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

  rotate () {
    const temp = this.height;
    this.height = this.width;
    this.width = temp;
  }

  double () {
    this.height *= 2;
    this.width *= 2;
  }
}
module.exports = Rectangle;
