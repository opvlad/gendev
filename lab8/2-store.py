def store(val):
    def get_value():
        return val

    return get_value

read = store(5)
value = read()

print(value)