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

