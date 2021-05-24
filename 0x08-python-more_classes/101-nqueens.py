#!/usr/bin/python3
""" a Module for N Queens Problem """


def check_queen(board, num):
    for i in range(len(board)):
        if num == board[i][1]:
            return True
        return False


def reject(board, col, num):
    if check_queen(board, num):
        return False
    i = 0
    while i < col:
        if abs(board[i][1] - num) == abs(i - col):
            return False
        i += 1
    return True


def clear_moves(board, col):
    """ clear board not safe """

    for i in range(col, len(board)):
        board[i][1] = None


def checkBoard(board, col):
    """ checks board by backtracking in every box state """

    for num in range(len(board)):
        clear_moves(board, col)
        if reject(board, col, num):
            board[col][1] = num
            if (col == len(board) - 1):
                print(board)
            else:
                checkBoard(board, col + 1)

if __name__ == "__main__":
    import sys

    if len(sys.argv) != 2:
        print("Usage: nqueens N")
        sys.exit(1)
    num = 0
    try:
        num = int(sys.argv[1])
    except:
        print("N must be a number")
        sys.exit(1)
    if num < 4:
        print("N must be at least 4")
        sys.exit(1)

    board = []
    for i in range(num):
        board.append([i, None])

    checkBoard(board, 0)
