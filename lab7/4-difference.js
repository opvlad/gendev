const array1 = [1, 3, -1, 5, -8, 7]
const array2 = [-1, 3, 9]

const difference = (array1, array2) => {
    const differenceArray = []

    array1.forEach((item) => {
        if (!(array2.includes(item))) {
            differenceArray.push(item)
        }
    })

    return differenceArray
}


