def seq(x):
    functions = []

    def add_function(x):
        if type(x) == 'function':
            functions.append(x)
        elif type(x) is int:
            functions.reverse()

            for i in functions:
                print(i)

        return add_function

    add_function(x)
    return add_function

def f1(x): return x * 2
def f2(x): return x + 1


result = seq(f1)(f2)(5)

print(result)