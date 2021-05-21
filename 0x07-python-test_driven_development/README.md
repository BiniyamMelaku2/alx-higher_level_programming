# 0x07. Python - Test-driven development
 Foundations - Higher-level programming ― Python
 
 

you should always write the documentation (module(s) + function(s)) and tests first, before you actually code anything

Don’t trust the user, always think about all possible edge cases

python -m doctest -v example.txt



python3 -m doctest -v ./tests/0-add_integer.txt | tail -2

python3 -c 'print(__import__("0-add_integer").__doc__)' | wc -l

python3 -c 'print(__import__("0-add_integer").add_integer.__doc__)' | wc -l
