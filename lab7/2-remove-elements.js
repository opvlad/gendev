const array = [1, 2, 3, 4, 5, 6, 7]

const removeElement = (array, ...elements) => {
    for (const element of elements) {
        const index = array.indexOf(element)
        array.splice(index, 1)
    }
}

