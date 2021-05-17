#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    try:
        nb_print = 0
        for item in my_list:
            if nb_print < x:
                print(item, end="")
                nb_print += 1
        print()       
        return nb_print
    except Exception as ex:
        print("Exceptions Caught:", ex)
