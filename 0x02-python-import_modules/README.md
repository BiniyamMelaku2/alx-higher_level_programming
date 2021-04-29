#0x02. Python - import & modules
 Foundations - Higher-level programming ― Python

fibo.py   |'fib', 'fib2'
          | __name__ = 'fibo'   , as global variable
import fibo
          | __name__ = 'fibo' 
fib = fibo.fib
fibo.__name__     | 'fibo'
............................
from fibo import fib, fib2

from fibo import *      |  introduces an unknown set of names

imp.reload()    |  to update changes of a module

python fibo.py <arguments>     | __name__ == "__main__"

if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
    
    


