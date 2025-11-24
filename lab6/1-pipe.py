inc = lambda x: x + 1
twice = lambda x: x * 2
cube = lambda x: x ** 3

def pipe(*args):
    for i in args:
        if not callable(i):
            raise TypeError('One of arguments is not callable')

    def calculate(x):
        for func in args:
            x = func(x)

        return x

    return calculate

f = pipe(inc, twice, cube)

print(f(5))
