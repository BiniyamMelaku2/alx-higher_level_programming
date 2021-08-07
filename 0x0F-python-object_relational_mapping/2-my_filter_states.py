#!/usr/bin/python3
"""
a script that takes in an argument and displays all values in the
states table of hbtn_0e_0_usa where name matches the argument.
"""


if __name__ == "__main__":
    from sys import argv
    import MySQLdb
    db_connection = MySQLdb.connect(host="localhost", port=3306,
                                    user=argv[1], passwd=argv[2],
                                    db=argv[3], charset="utf8")
    cursor = db_connection.cursor()
    cursor.execute("SELECT * FROM states\
                    WHERE name LIKE '{}'\
                    ORDER BY states.id ASC".format(argv[4]))
    query_rows = cursor.fetchall()
    for row in query_rows:
        print("{}".format(row))
    cursor.close()
    db_connection.close()
