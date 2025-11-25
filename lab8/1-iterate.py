my_dict = {'a':1, 'b':2, 'c':3}

def iterate(obj: dict, callback):
    for key, value in obj.items():
        callback(key, value, obj)

iterate(my_dict, lambda key, value, obj: print(f'key: {key}, value: {value}'))

