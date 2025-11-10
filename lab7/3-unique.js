const array = [1, 3, 1, 1, 5, 6, 7, 3]

const unique = (array) => {
    const uniqueArray = []

    array.forEach((item) => {
        if (!(uniqueArray.includes(item))) {
            uniqueArray.push(item)
        }
    })

    return uniqueArray
}

console.log(unique(array))