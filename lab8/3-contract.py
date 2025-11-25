def concat(str1, str2, str3):
    return str1 + str2 + str3

def contract(func, *types):
    def check_type(*args):
        for i in range(len(args)):
            if type(args[i]) is not types[i]:
                raise TypeError(f'Expected {types[i]}, received {type(args[i])}')

        result = func(*args)
        if type(result) is not types[-1]:
            raise TypeError(f'Expected {types[-1]}, received {type(result)}')

        return result

    return check_type

concat_strings = contract(concat, str, str, str, str)
res1 = concat_strings('Good ', 'morning, ', 'Vlad.')
print(res1)

res2 = concat_strings('Good ', 'morning, ', 3)
print(res2)