# 0x10. Python - Network #0


# Concepts

* [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
* [List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
* [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
* [HTTP Headers 101](https://medium.com/@bilalbarki/http-headers-101-5392a7eff87b#.xj9rmyxhp)
* [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)
* [Linux curl command](https://www.computerhope.com/unix/curl.htm)
* [Popular curl Examples](https://www.keycdn.com/support/popular-curl-examples)
* [curl.1 the man page](https://curl.se/docs/manpage.html)
* [The curl guide to HTTP requests](https://flaviocopes.com/http-curl/)

## Resources
Read or watch:

[HTTP (HyperText Transfer Protocol)](https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html) (except: “TRACE” Request Method, “CONNECT” Request Method, Language Negotiation and “Options MultiView” and Character Set Negotiation)
* [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## General
* All your Bash scripts should be exactly 3 lines long (wc -l file should print 3)
* All your files must be executable
* The first line of all your bash files should be exactly #!/bin/bash
* The first line of all your Python files should be exactly #!/usr/bin/python3
* The second line of all your Bash scripts should be a comment explaining what is the script doing
* All curl commands must have the option -s (silent mode)
* Your code should use the PEP 8

## Tasks

## [0. cURL body size](./0-body_size.sh)
  Write a Bash script that takes in a URL, sends a request to that URL, and displays the size of the body of the response

* The size must be displayed in bytes
* You have to use curl
> ./0-body_size.sh 0.0.0.0:5000

## [1. cURL to the end](./1-body.sh)
  Write a Bash script that takes in a URL, sends a GET request to the URL, and displays the body of the response

* Display only body of a 200 status code response
* You have to use curl
> ./1-body.sh 0.0.0.0:5000/route_1 ; echo ""

## [2. cURL Method](./2-delete.sh)
  Write a Bash script that sends a DELETE request to the URL passed as the first argument and displays the body of the response

You have to use curl
> ./2-delete.sh 0.0.0.0:5000/route_3 ; echo ""

## [3. cURL only methods](./3-methods.sh)
  Write a Bash script that takes in a URL and displays all HTTP methods the server will accept.

You have to use curl
> ./3-methods.sh 0.0.0.0:5000/route_4

## [4. cURL headers](./4-header.sh)
  Write a Bash script that takes in a URL as an argument, sends a GET request to the URL, and displays the body of the response

* A header variable X-HolbertonSchool-User-Id must be sent with the value 98
* You have to use curl
> ./4-header.sh 0.0.0.0:5000/route_5 ; echo ""

## [5. cURL POST parameters](./5-post_params.sh)
  Write a Bash script that takes in a URL, sends a POST request to the passed URL, and displays the body of the response

* A variable email must be sent with the value hr@holbertonschool.com
* A variable subject must be sent with the value I will always be here for PLD
* You have to use curl
> ./5-post_params.sh 0.0.0.0:5000/route_6 ; echo ""

## [6. Find a peak](./6-peak.py) [big-O](./6-peak.txt)
  Technical interview preparation:

* You are not allowed to google anything
* Whiteboard first
Write a function that finds a peak in a list of unsorted integers.

Prototype: [def find_peak(list_of_integers):]
* You are not allowed to import any module
* Your algorithm must have the lowest complexity (hint: you don’t need to go through all numbers to find a peak)
* 6-peak.py must contain the function
* 6-peak.txt must contain the complexity of your algorithm: O(log(n)), O(n), O(nlog(n)) or O(n2)
Note: there may be more than one peak in the list
> ./6-main.py

> wc -l 6-peak.txt

## [7. Only status code](./100-status_code.sh)
  Write a Bash script that sends a request to a URL passed as an argument, and displays only the status code of the response.

* You are not allowed to use any pipe, redirection, etc.
* You are not allowed to use ; and &&
* You have to use curl
> ./100-status_code.sh 0.0.0.0:5000 ; echo ""

> ./100-status_code.sh 0.0.0.0:5000/nop ; echo ""

## [8. cURL a JSON file](./101-post_json.sh)
  Write a Bash script that sends a JSON POST request to a URL passed as the first argument, and displays the body of the response.

* Your script must send a POST request with the contents of a file, passed with the filename as the second argument of the script, in the body of the request
* You have to use curl
> ./101-post_json.sh 0.0.0.0:5000/route_json my_json_0 ; echo ""

> ./101-post_json.sh 0.0.0.0:5000/route_json my_json_1 ; echo ""

> ./101-post_json.sh 0.0.0.0:5000/route_json my_json_2 ; echo ""

## [9. Catch me if you can!](./102-catch_me.sh)
  Write a Bash script that makes a request to 0.0.0.0:5000/catch_me that causes the server to respond with a message containing You got me!, in the body of the response.
* You have to use curl
* You are not allow to use echo, cat, etc. to display the final result
> ./102-catch_me.sh ; echo ""
