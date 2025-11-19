const seq = (x) => {
    const functions = []

    const addFunction = (x) => {
        if (typeof x === "function") {
            functions.push(x)
        }
        if (typeof x === "number") {
            functions.reverse()

            return functions.reduce((acc, currentValue) => currentValue(acc), x)
        }

        return addFunction
    }

    addFunction(x)
    return addFunction
}


const result = seq(x => x + 7)(x => x * 2)(5)

console.log(result)

