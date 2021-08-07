# 0x0F. Python - Object-relational mapping
 Foundations > Higher-level programming > Python

# Resources
Read or watch:

* [Object-relational mappers](https://docs.sqlalchemy.org/en/13/orm/tutorial.html)
* [mysqlclient/MySQLdb documentation (please don’t pay attention to _mysql)](https://docs.sqlalchemy.org/en/13/)
* [MySQLdb tutorial](https://github.com/PyMySQL/mysqlclient)
* [SQLAlchemy tutorial](https://docs.sqlalchemy.org/en/13/orm/tutorial.html)
* [SQLAlchemy](https://docs.sqlalchemy.org/en/13/)
* [mysqlclient/MySQLdb](https://github.com/PyMySQL/mysqlclient)
* [Introduction to SQLAlchemy](https://www.youtube.com/watch?v=woKYyhLCcnU)
* [Flask SQLAlchemy](https://www.youtube.com/playlist?list=PLXmMXHVSvS-BlLA5beNJojJLlpE0PJgCW)
* [10 common stumbling blocks for SQLAlchemy newbies](http://alextechrants.blogspot.com/2013/11/10-common-stumbling-blocks-for.html)
* [Python SQLAlchemy Cheatsheet](https://www.pythonsheets.com/notes/python-sqlalchemy.html)
* [SQLAlchemy ORM Tutorial for Python Developers (Warning: This tutorial is with PostgreSQL, but the concept of SQLAlchemy is the same with MySQL)](https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers/)
* [SQLAlchemy Tutorial](https://overiq.com/sqlalchemy-101/)

# Tasks

## [0. Get all states](./0-select_states.py)
  Write a script that lists all states from the database hbtn_0e_0_usa:
* Your script should take 3 arguments: [ mysql username, mysql password and database name ] (no argument validation needed)
* You must use the module [ MySQLdb (import MySQLdb) ]
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by states.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported

## [1. Filter states](./1-filter_states.py)
  Write a script that lists all states with a name starting with N (upper N) from the database hbtn_0e_0_usa:
* Your script should take 3 arguments: [ mysql username, mysql password and database name ] (no argument validation needed)
* You must use the module [ MySQLdb (import MySQLdb) ]
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by states.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported


