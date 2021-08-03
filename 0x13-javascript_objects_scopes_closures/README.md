# 0x13. JavaScript - Objects, Scopes and Closures
 Foundations > Higher-level programming > Javascript
 
 ## Resources
Read or watch:

* [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Object-oriented JavaScript (read all examples!)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [Class - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [super - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
* [extends - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
* [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [this/self](https://alistapart.com/article/getoutbindingsituations/)
* [Modern JS](https://github.com/mbeaudru/modern-js-cheatsheet)

## Tasks

## [0. Rectangle #0](./0-rectangle.js)
  Write an empty class Rectangle that defines a rectangle:

You must use the class notation for defining your class

> ./0-main.js

## [1. Rectangle #1](./1-rectangle.js)
  Write a class Rectangle that defines a rectangle:
* You must use the class notation for defining your class
* The constructor must take 2 arguments w and h
* Initialize the instance attribute width with the value of w
* Initialize the instance attribute height with the value of h
> ./1-main.js

## [2. Rectangle #2](./2-rectangle.js)
  Write a class Rectangle that defines a rectangle:
* You must use the class notation for defining your class
* The constructor must take 2 arguments w and h
* Initialize the instance attribute width with the value of w
* Initialize the instance attribute height with the value of h
* If w or h is equal to 0 or not a positive integer, create an empty object
> ./2-main.js

## [3. Rectangle #3](./3-rectangle.js)
  Write a class Rectangle that defines a rectangle:
* You must use the class notation for defining your class
* The constructor must take 2 arguments: w and h
* Initialize the instance attribute width with the value of w
* Initialize the instance attribute height with the value of h
* If w or h is equal to 0 or not a positive integer, create an empty object
* Create an instance method called print() that prints the rectangle using the character X
> ./3-main.js

## [4. Rectangle #4](./4-rectangle.js)
  Write a class Rectangle that defines a rectangle:
* You must use the class notation for defining your class
* The constructor must take 2 arguments: w and h
* Initialize the instance attribute width with the value of w
* Initialize the instance attribute height with the value of h
* If w or h is equal to 0 or not a positive integer, create an empty object
* Create an instance method called print() that prints the rectangle using the character X
* Create an instance method called rotate() that exchanges the width and the height of the rectangle
* Create an instance method called double() that multiples the width and the height of the rectangle by 2

> ./4-main.js

## [5. Square #0](./5-square.js)
  Write a class Square that defines a square and inherits from Rectangle of 4-rectangle.js:
* You must use the class notation for defining your class and extends
* The constructor must take 1 argument: size
* The constructor of Rectangle must be called (by using super())
> ./5-main.js

## [6. Square #1](./6-square.js)
  Write a class Square that defines a square and inherits from Square of 5-square.js:
* You must use the class notation for defining your class and extends
* Create an instance method called charPrint(c) that prints the rectangle using the character c
* If c is undefined, use the character X
> ./6-main.js

## [7. Occurrences](./7-occurrences.js)
  Write a function that returns the number of occurrences in a list:
* Prototype: [ exports.nbOccurences = function (list, searchElement) ]
> ./7-main.js

## [8. Esrever](./8-esrever.js)
  Write a function that returns the reversed version of a list:
* Prototype: [ exports.esrever = function (list) ]
* You are not allow to use the built-in method reverse
> ./8-main.js

## [9. Log me](./9-logme.js)
  Write a function that prints the number of arguments already printed and the new argument value.
* Prototype: [ exports.logMe = function (item) ]
* Output format: [ <number arguments already printed>: <current argument value> ]
> ./9-main.js

## [10. Number conversion](./10-converter.js)
  Write a function that converts a number from base 10 to another base passed as argument:
* Prototype: [ exports.converter = function (base) ]
* You are not allowed to import any file
* You are not allowed to declare any new variable (var, let, etc..)
> ./10-main.js

## [11. Factor index](./100-map.js)
  Write a script that imports an array and computes a new array.
* Your script must import list from the file 100-data.js
* You must use a map. [Tips](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control)
* A new list must be created with each value equal to the value of the initial list, multipled by the index in the list
* Print both the initial list and the new list
> ./100-map.js 

## [12. Sorted occurences](./101-sorted.js )
  Write a script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.
* Your script must import dict from the file 101-data.js
* In the new dictionary:
* A key is a number of occurrences
* A value is the list of user ids
* Print the new dictionary at the end
> ./101-sorted.js 

## [13. Concat files](./102-concat.js)
  Write a script that concats 2 files.
* The first argument is the file path of the first source file
* The second argument is the file path of the second source file
* The third argument is the file path of the destination
> ./102-concat.js fileA fileB fileC
