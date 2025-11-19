const seq = (x) => {
    const functions = []

    if (typeof x === "function") functions.push(x)
    if (typeof x === "number") {
        console.log(functions[0])
        console.log(typeof functions[0])
        // console.log(functions[0](x))
    }


    // console.log(typeof functions)
    return seq
}

const f1 = (x) => x + 2

seq(x => x + 1)(x => x -4)(0)



