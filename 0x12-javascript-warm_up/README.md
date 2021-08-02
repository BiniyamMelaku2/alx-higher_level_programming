# 0x12. JavaScript - Warm up
 Foundations > Higher-level programming > Javascript
 
## General
* The first line of all your files should be exactly [#!/usr/bin/node]
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should be semistandard compliant (version 14.x.x). [Rules of Standard](https://standardjs.com/rules.html) + [semicolons on top](https://github.com/standard/semistandard). Also as reference: [AirBnB style](https://github.com/airbnb/javascript)
* All your files must be executable 
* semi-standard [Documentation](https://github.com/standard/semistandard) 

## Tasks

## [0. First constant, first print](./0-javascript_is_amazing.js)
  Write a script that prints “JavaScript is amazing”:
* You must create a constant variable called myVar with the value “JavaScript is amazing”
* You must use console.log(...) to print all output
* You are not allowed to use var
> 0-javascript_is_amazing.js

> semistandard ./0-javascript_is_amazing.js 

## [1. 3 languages](./1-multi_languages.js)
  Write a script that prints 3 lines:
* The first line: “C is fun”
* The second line: “Python is cool”
* The third line: “JavaScript is amazing”
* You must use console.log(...) to print all output
* You are not allowed to use var
> ./1-multi_languages.js

## [2. Arguments](./2-arguments.js)
  Write a script that prints a message depending of the number of arguments passed:
* If no arguments are passed to the script, print “No argument”
* If only one argument is passed to the script, print “Argument found”
* Otherwise, print “Arguments found”
* You must use console.log(...) to print all output
( You are not allowed to use var

Reference: [process.argv](https://nodejs.org/api/process.html#process_process_argv)
> ./2-arguments.js | ./2-arguments.js Holberton | ./2-arguments.js Holberton School 
 
## [3. Value of my argument](./3-value_argument.js)
  Write a script that prints the first argument passed to it:
* If no arguments are passed to the script, print “No argument”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You are not allowed to use length
> ./3-value_argument.js  | ./3-value_argument.js Holberton

## [4. Create a sentence](./4-concat.js)
  Write a script that prints two arguments passed to it, in the following format: “ is ”
* You must use console.log(...) to print all output
* You are not allowed to use var
> ./4-concat.js c cool

> ./4-concat.js c

> ./4-concat.js

## [5. An Integer](./5-to_integer.js)
  Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
* If the argument can’t be converted to an integer, print “Not a number”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You are not allowed to use try/catch
> ./5-to_integer.js

> ./5-to_integer.js 89

> ./5-to_integer.js "89"

> ./5-to_integer.js 89.89

> ./5-to_integer.js Holberton


## [6. Loop to languages](./6-multi_languages_loop.js)
  Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop
* The first line: “C is fun”
* The second line: “Python is cool”
* The third line: “JavaScript is amazing”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You are not allowed to use any if/else statement
* You can use only one console.log
* You must use a loop (while, for, etc.)
> ./6-multi_languages_loop.js

## [7. I love C](./7-multi_c.js)
  Write a script that prints x times “C is fun”
* Where x is the first argument of the script
* If the first argument can’t be converted to an integer, print “Missing number of occurrences”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You can use only two console.log
* You must use a loop (while, for, etc.)
> ./7-multi_c.js 2

> ./7-multi_c.js 5

> ./7-multi_c.js

> ./7-multi_c.js -3

## [8. Square](./8-square.js)
  Write a script that prints a square
* The first argument is the size of the square
* If the first argument can’t be converted to an integer, print “Missing size”
* You must use the character X to print the square
* You must use console.log(...) to print all output
* You are not allowed to use var
* You must use a loop (while, for, etc.)
> ./8-square.js

> ./8-square.js Holberton

> ./8-square.js 2

> ./8-square.js 6

> ./8-square.js -3

## [9. Add](./9-add.js)
  Write a script that prints the addition of 2 integers
* The first argument is the first integer
* The second argument is the second integer
* You have to define a function with this prototype: [function add(a, b)]
* You must use console.log(...) to print all output
* You are not allowed to use var
> ./9-add.js

> ./9-add.js 1

> ./9-add.js 1 7

> ./9-add.js 13 89

## [10. Factorial](./10-factorial.js)
  Write a script that computes and prints a factorial
* The first argument is integer (argument can be cast as integer) used for computing the factorial
* Factorial of NaN is 1
* You must do it recursively
* You must use a function
* You must use console.log(...) to print all output
* You are not allowed to use var
> ./10-factorial.js 

> ./10-factorial.js 3

> ./10-factorial.js 89

> ./10-factorial.js 333

## [11. Second biggest!](./11-second_biggest.js)
  Write a script that searches the second biggest integer in the list of arguments.
* You can assume all arguments can be converted to integer
* If no argument passed, print 0
* If the number of arguments is 1, print 0
* You must use console.log(...) to print all output
* You are not allowed to use var
> ./11-second_biggest.js

> ./11-second_biggest.js 1

> ./11-second_biggest.js 4 2 5 3 0 -3

## [12. Object](./12-object.js)
  Update the script to replace the value 12 with 89:
* You are not allowed to use var
> ./12-object.js

## [13. Add file](./13-add.js)
  Write a function that returns the addition of 2 integers.
* The function must be visible from outside
* The name of the function must be add
* You are not allowed to use var

[Tip](http://51elliot.blogspot.com/2012/01/simple-intro-to-nodejs-module-scope.html)
> ./13-add.js

## [14. Const or not const](./100-let_me_const.js)
  Write a file that modifies the value of myVar to 333
  
> ./100-main.js  

Do you get it? Tweet! Post! Talk about it!

Hint: Scope

This exercise doesn’t pass semistandard so don’t worry about it.

## [15. Call me Moby](./101-call_me_moby.js)
  Write a function that executes x times a function.
* The function must be visible from outside
* Prototype: [function (x, theFunction)]
* You are not allowed to use var
> ./101-main.js


## [16. Add me maybe](./102-add_me_maybe.js)
  Write a function that increments and calls a function.
* The function must be visible from outside
* Prototype: [function (number, theFunction)]
* You are not allowed to use var
> ./102-main.js

## [17. Increment object](./103-object_fct.js)
  Update this script by adding a new function incr that increments the integer value.

You are not allowed to use var

> ./103-object_fct.js 


## Install Node 10
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

$ sudo apt-get install -y nodejs

$ sudo npm install semistandard --global



## Resources

Read or watch:

* [Writing JavaScript Code](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
* [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Operators](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
* [Controlling Program Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
* [Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
* [Objects and Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* [Intrinsic Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* [Module patterns](http://darrenderidder.github.io/talks/ModulePatterns/#/)
* [var, let and const](https://www.youtube.com/watch?v=sjyJBL5fkp8)
* [JavaScript Tutorial](https://www.youtube.com/watch?v=vZBCTc9zHtI)
* [Modern JS](https://github.com/mbeaudru/modern-js-cheatsheet)
