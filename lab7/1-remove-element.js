const array = [1, 2, 3, 4, 5, 6, 7]

const removeElement = (array, element) => {
    const index = array.indexOf(element)
    array.splice(index, 1)
}

