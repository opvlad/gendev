inc = lambda x: x + 1
twice = lambda x: x * 2
cube = lambda x: x ** 3

def show_error(error):
    print(error)

class Compose:
    def __init__(self, *args):
        self.args = args
        self.listeners = []

    def __call__(self, x):
        try:
            for func in reversed(self.args):
                x = func(x)
            return x

        except Exception as e:
            for callback in self.listeners:
                callback(e)
            return None

    def on(self, event, callback):
        if event == 'error':
            self.listeners.append(callback)

f = Compose(inc, twice, cube, 1)
f.on('error', show_error)

print(f(5))




# def compose(*args):
#     listeners = []
#
#     def calculate(x):
#         try:
#             for func in reversed(args):
#                 x = func(x)
#             return x
#
#         except Exception as e:
#             for callback in listeners:
#                 callback(e)
#             return None
#
#     def register_handler(event, callback):
#         if event == 'error':
#             listeners.append(callback)
#
#     calculate.on = register_handler
#
#     return calculate


# f = compose(inc, 1, cube)
#
# f.on('error', show_error)
#
# print(f(5))
