const array = () => {
    const array = []

    const object = (x) => array[x]
    object.push = (x) => array.push(x)
    object.pop = () => array.pop()

    return object
}
