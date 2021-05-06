# 0x04. Python - More Data Structures: Set, Dictionary
 Foundations - Higher-level programming ― Python
--------------------------------------------------------------------------------------------------------------------------------------
   Notes
---------------------------------------------------------------------------------------------------------------------------------------
Lambda, filter, reduce and map
sum = lambda x, y : x + y
r = map(func, seq)
F = map(fahrenheit, temperatures)
filter(function, sequence)
odd_numbers = list(filter(lambda x: x % 2, fibonacci))
reduce(func, seq)
import functools
functools.reduce(lambda x,y: x+y, [47,11,42,13])

1 to 3999.    I ,  II, III, IV, V, VI, VII, VII, IX, X, XI, XII, XIII, XV, XVI, XVII, XVIII, XIX, XX
              C, CC, CCC, CD, D, DC, DCC,DCCC, CM, ....   MMMCDIC, MMMM
              I =1, V =5, X =10, L =50, C =100, D =500, M =1000,  
              2421 =  MM CD XX I
              789 = D L  XXX IX
              160 = C L X
              207 = CC V II
              1066 = M L X VI
              1009 = M IX
              1918 = M CM X VIII = 1000 + 900 + 10 + 8
              2014 = MM X IV   = 2000 + 10 + 4
              3999 = MMM CM XC IX  = 3000 + 900 + 90 + 9
              1000 -> 500 -> 100 -> 50 -> 10 -> 5 -> 1
              
              M_1000 D_500 C_100 L_50 X_10 V_5 I_1  
              
              numerals = {'I' :1, 'V' =5, 'X' =10, 'L' =50, 'C' =100, 'D' =500, 'M' =1000}
