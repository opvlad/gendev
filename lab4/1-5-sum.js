const sum1 = (...args) => {
    let result = 0;

    for (let i = 0; i < args.length; i++){
        result += args[i];
    }

    return result;
}

const sum2 = (...args) => {
    let result = 0;

    for (const i of args) {
        result += i
    }

    return result;
}

const sum3 = (...args) => {
    let result = 0;

    while (args.length > 0) {
        result += args.pop();
    }

    return result;
}

const sum4 = (...args) =>  {
    let result = 0;

    do {
        result += args.pop();
    } while (args.length > 0);

    return result;
}

const sum5 = (...args) => {
    return args.reduce((acc, cur) => acc + cur, 0);
}

