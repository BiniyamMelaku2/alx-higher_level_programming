# 0x14. JavaScript - Web scraping

## General
* Your code should be semistandard compliant. [Rules of Standard](https://standardjs.com/rules.html) + [semicolons on top](https://github.com/standard/semistandard). Also as reference: [AirBnB style](https://github.com/airbnb/javascript)
* The first line of all your files should be exactly #!/usr/bin/node
* All your files must be executable
* You are not allowed to use var


## Resources
Read or watch:

* [Working with JSON data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
* [The workflow of accessing the attributes of a simply-created JSON object by Jimmy Tran from Cohort 1 - San Francisco](https://medium.com/@vietkieutie/the-workflow-of-accessing-the-attributes-of-a-simply-created-json-object-82a5b33e2319)
* [request module](https://github.com/request/request)
* [Modern JS](https://github.com/mbeaudru/modern-js-cheatsheet)
* [How do I write files in Node.js?](https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/)


## Install Node 10

> curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

> sudo apt-get install -y nodejs


## Install semi-standard
[Documentation](https://github.com/standard/semistandard)

> sudo npm install semistandard --global

## Install request module and use it
[Documentation](https://github.com/standard/semistandard)

> sudo npm install request --global

> export NODE_PATH=/usr/lib/node_modules

Notes: Request module has been deprecated since February 2020 - the team is considering alternative to replace this module - however, it’s a really simple and powerful module for practicing web-scraping in JavaScript (and still used a lot in the industry).

## Tasks

## [0. Readme](./0-readme.js)
Write a script that reads and prints the content of a file.

* The first argument is the file path
* The content of the file must be read in utf-8
* If an error occurred during the reading, print the error object
```
@ubuntu:~/0x14$ cat cisfun
C is super fun!
@ubuntu:~/0x14$ ./0-readme.js cisfun
C is super fun!

@ubuntu:~/0x14$ ./0-readme.js doesntexist
{ Error: ENOENT: no such file or directory, open 'doesntexist'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'doesntexist' }
@ubuntu:~/0x14$ 
```

## [1. Write me](./1-writeme.js)
Write a script that writes a string to a file.

* The first argument is the file path
* The second argument is the string to write
* The content of the file must be written in utf-8
* If an error occurred during while writing, print the error object
> ./1-writeme.js my_file.txt "Python is cool"

> cat my_file.txt ; echo ""

## [2. Status code](./2-statuscode.js)
Write a script that display the status code of a GET request.

* The first argument is the URL to request (GET)
* The status code must be printed like this: code: <status code>
* You must use the module request
> ./2-statuscode.js https://intranet.hbtn.io/status

> ./2-statuscode.js https://intranet.hbtn.io/doesnt_exist

## [3. Star wars movie title](./)
Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

The first argument is the movie ID
You must use the [Star wars API](https://swapi-api.hbtn.io/) with the endpoint https://swapi-api.hbtn.io/api/films/:id
You must use the module request
> ./3-starwars_title.js 1

> ./3-starwars_title.js 5

