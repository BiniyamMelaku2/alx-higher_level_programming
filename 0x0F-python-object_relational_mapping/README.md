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
* [SQL Injection Cheat Sheet](https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/)
* [Use SQLAlchemy ORMs to Access MySQL Data in Python](https://www.cdata.com/kb/tech/mysql-python-sqlalchemy.rst)
* [sqlalchemy existing database query](https://stackoverflow.com/questions/39955521/sqlalchemy-existing-database-query)
* [Basic Relationship Patterns](https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html)

# Tasks

## [0. Get all states](./0-select_states.py)
  Write a script that lists all states from the database hbtn_0e_0_usa:
* Your script should take 3 arguments: [ mysql username, mysql password and database name ] (no argument validation needed)
* You must use the module [ MySQLdb (import MySQLdb) ]
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by states.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported
> cat 0-select_states.sql | mysql -uroot -p

> ./0-select_states.py root root hbtn_0e_0_usa


## [1. Filter states](./1-filter_states.py)
  Write a script that lists all states with a name starting with N (upper N) from the database hbtn_0e_0_usa:
* Your script should take 3 arguments: [ mysql username, mysql password and database name ] (no argument validation needed)
* You must use the module [ MySQLdb (import MySQLdb) ]
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by states.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported
> cat 0-select_states.sql | mysql -uroot -p

> ./1-filter_states.py root root hbtn_0e_0_usa


## [2. Filter states by user input](./2-my_filter_states.py)
  Write a script that takes in an argument and displays all values in the states table of hbtn_0e_0_usa where name matches the argument.
* Your script should take 4 arguments: mysql username, mysql password, database name and state name searched (no argument validation needed)
* You must use the module MySQLdb (import MySQLdb)
* Your script should connect to a MySQL server running on localhost at port 3306
* You must use format to create the SQL query with the user input
* Results must be sorted in ascending order by states.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported
> cat 0-select_states.sql | mysql -uroot -p

> ./2-my_filter_states.py root root hbtn_0e_0_usa 'Arizona'

## [3. SQL Injection...](./3-my_safe_filter_states.py)
  Wait, do you remember the previous task? Did you test "Arizona'; TRUNCATE TABLE states ; SELECT * FROM states WHERE name = '" as an input?
> ./2-my_filter_states.py root root hbtn_0e_0_usa "Arizona'; TRUNCATE TABLE states ; SELECT * FROM states WHERE name = '"

> ./0-select_states.py root root hbtn_0e_0_usa

What? Empty?

Yes, it’s an [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) to delete all records of a table…

Once again, write a script that takes in arguments and displays all values in the states table of hbtn_0e_0_usa where name matches the argument. But this time, write one that is safe from MySQL injections!
* Your script should take 4 arguments: mysql username, mysql password, database name and state name searched (safe from MySQL injection)
* You must use the module MySQLdb (import MySQLdb)
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by states.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported 
> cat 0-select_states.sql | mysql -uroot -p
  
> ./3-my_safe_filter_states.py root root hbtn_0e_0_usa 'Arizona'  

## [4. Cities by states](./4-cities_by_state.py)
  Write a script that lists all cities from the database hbtn_0e_4_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module MySQLdb (import MySQLdb)
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by cities.id
* You can use only execute() once
* Results must be displayed as they are in the example below
* Your code should not be executed when imported
> cat 4-cities_by_state.sql | mysql -uroot -p

> ./4-cities_by_state.py root root hbtn_0e_4_usa

## [5. All cities by state](./5-filter_cities.py)
  Write a script that takes in the name of a state as an argument and lists all cities of that state, using the database hbtn_0e_4_usa
* Your script should take 4 arguments: mysql username, mysql password, database name and state name (SQL injection free!)
* You must use the module MySQLdb (import MySQLdb)
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by cities.id
* You can use only execute() once
* The results must be displayed as they are in the example below
* Your code should not be executed when imported
> ./5-filter_cities.py root root hbtn_0e_4_usa Texas

> cat 4-cities_by_state.sql | mysql -uroot -p

> ./5-filter_cities.py root root hbtn_0e_4_usa Texas

> ./5-filter_cities.py root root hbtn_0e_4_usa Hawaii

## [6. First state model](./model_state.py)
  Write a python file that contains the class definition of a State and an instance Base = declarative_base():
* State class:
- inherits from Base [Tips](https://docs.sqlalchemy.org/en/13/orm/extensions/declarative/basic_use.html)
- links to the MySQL table states
- class attribute id that represents a column of an auto-generated, unique integer, can’t be null and is a primary key
- class attribute name that represents a column of a string with maximum 128 characters and can’t be null
* You must use the module SQLAlchemy
* Your script should connect to a MySQL server running on localhost at port 3306
* WARNING: all classes who inherit from Base must be imported before calling Base.metadata.create_all(engine)
> cat 6-model_state.sql | mysql -uroot -p

> ./6-model_state.py root root hbtn_0e_6_usa

> cat 6-model_state.sql | mysql -uroot -p

## [7. All states via SQLAlchemy](./7-model_state_fetch_all.py)
  Write a script that lists all State objects from the database hbtn_0e_6_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by states.id
* The results must be displayed as they are in the example below
* Your code should not be executed when imported


> cat 7-model_state_fetch_all.sql | mysql -uroot -p hbtn_0e_6_usa

> ./7-model_state_fetch_all.py root root hbtn_0e_6_usa

## [8. First state](./8-model_state_fetch_first.py)
  Write a script that prints the first State object from the database hbtn_0e_6_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* The state you display must be the first in states.id
* You are not allowed to fetch all states from the database before displaying the result
* The results must be displayed as they are in the example below
* If the table states is empty, print Nothing followed by a new line
* Your code should not be executed when imported
> ./8-model_state_fetch_first.py root root hbtn_0e_6_usa

## [9. Contains `a`](./9-model_state_filter_a.py)
  Write a script that lists all State objects that contain the letter a from the database hbtn_0e_6_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by states.id
* The results must be displayed as they are in the example below
* Your code should not be executed when imported
> ./9-model_state_filter_a.py root root hbtn_0e_6_usa

## [10. Get a state](./10-model_state_my_get.py)
  Write a script that prints the State object with the name passed as argument from the database hbtn_0e_6_usa
* Your script should take 4 arguments: mysql username, mysql password, database name and state name to search (SQL injection free)
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* You can assume you have one record with the state name to search
* Results must display the states.id
* If no state has the name you searched for, display Not found
* Your code should not be executed when imported
> ./10-model_state_my_get.py root root hbtn_0e_6_usa Texas

> ./10-model_state_my_get.py root root hbtn_0e_6_usa Illinois

## [11. Add a new state](./11-model_state_insert.py)
  Write a script that adds the State object “Louisiana” to the database hbtn_0e_6_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* Print the new states.id after creation
* Your code should not be executed when imported
> ./11-model_state_insert.py root root hbtn_0e_6_usa

> ./7-model_state_fetch_all.py root root hbtn_0e_6_usa 

## [12. Update a state](./)
  Write a script that changes the name of a State object from the database hbtn_0e_6_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* Change the name of the State where id = 2 to New Mexico
* Your code should not be executed when imported
> ./12-model_state_update_id_2.py root root hbtn_0e_6_usa 

> ./7-model_state_fetch_all.py root root hbtn_0e_6_usa 

## [13. Delete states](./)
  Write a script that deletes all State objects with a name containing the letter a from the database hbtn_0e_6_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* Your code should not be executed when imported
> ./13-model_state_delete_a.py root root hbtn_0e_6_usa 

> ./7-model_state_fetch_all.py root root hbtn_0e_6_usa 

## [14. Cities in state](./14-model_city_fetch_by_state.py) [model_city](./model_city.py)
  Write a Python file similar to model_state.py named model_city.py that contains the class definition of a City.

 City class:

- inherits from Base (imported from model_state)
- links to the MySQL table cities
- class attribute id that represents a column of an auto-generated, unique integer, can’t be null and is a primary key
- class attribute name that represents a column of a string of 128 characters and can’t be null
- class attribute state_id that represents a column of an integer, can’t be null and is a foreign key to states.id

You must use the module SQLAlchemy

Next, write a script 14-model_city_fetch_by_state.py that prints all City objects from the database hbtn_0e_14_usa:

* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* You must import State and Base from model_state - from model_state import Base, State
* Your script should connect to a MySQL server running on localhost at port 3306
* Results must be sorted in ascending order by cities.id
* Results must be display as they are in the example below (<state name>: (<city id>) <city name>)
* Your code should not be executed when imported
> cat 14-model_city_fetch_by_state.sql | mysql -uroot -p

> ./14-model_city_fetch_by_state.py root root hbtn_0e_14_usa

## [15. City relationship](./100-relationship_states_cities.py) [relationship_city](./relationship_city.py)  [relationship_state](./relationship_state.py)
  Improve the files model_city.py and model_state.py, and save them as relationship_city.py and relationship_state.py:

- City class:
No change
- State class:
In addition to previous requirements, the class attribute cities must represent a relationship with the class City. If the State object is deleted, all linked City objects must be automatically deleted. Also, the reference from a City object to his State should be named state
You must use the module SQLAlchemy

Write a script that creates the State “California” with the City “San Francisco” from the database hbtn_0e_100_usa: (100-relationship_states_cities.py)

* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* Your script should connect to a MySQL server running on localhost at port 3306
* You must use the cities relationship for all State objects
* Your code should not be executed when imported
> cat 100-relationship_states_cities.sql | mysql -uroot -p

> ./100-relationship_states_cities.py root root hbtn_0e_100_usa

> cat 100-relationship_states_cities.sql | mysql -uroot -p

## [16. List relationship](./101-relationship_states_cities_list.py)
  Write a script that lists all State objects, and corresponding City objects, contained in the database hbtn_0e_101_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* The connection to your MySQL server must be to localhost on port 3306
* You must only use one query to the database
* You must use the cities relationship for all State objects
* Results must be sorted in ascending order by states.id and cities.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported
```
<state id>: <state name>
<tabulation><city id>: <city name>
```
> cat 101-relationship_states_cities_list.sql | mysql -uroot -p

> ./101-relationship_states_cities_list.py root root hbtn_0e_101_usa

## [17. From city](./102-relationship_cities_states_list.py)
  Write a script that lists all City objects from the database hbtn_0e_101_usa
* Your script should take 3 arguments: mysql username, mysql password and database name
* You must use the module SQLAlchemy
* Your script should connect to a MySQL server running on localhost at port 3306
* You must use only one query to the database
* You must use the state relationship to access to the State object linked to the City object
* Results must be sorted in ascending order by cities.id
* Results must be displayed as they are in the example below
* Your code should not be executed when imported
```
<city id>: <city name> -> <state name>
```
> ./102-relationship_cities_states_list.py root root hbtn_0e_101_usa

