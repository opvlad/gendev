const range = (start, end) => {
    length = end - start
    const array = new Array(length)
    array[0] = start

    for (let i = 1; i <= length; i++) {
        array[i] = array[i - 1] + 1
    }

    return array
}


const rangeOdd = (start, end) => {
    length = end - start
    const array = range(start, end)
    const resultArray = []

    array.forEach(element => {
        if (element % 2 !== 0) {
            resultArray.push(element)
        }
    })

    return resultArray
}

