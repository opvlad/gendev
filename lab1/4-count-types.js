const myArray = [true, 'hello', 5, 12, -200, false, false, 'word', {name: 'Vlad'}, 12, undefined];

let countTypes = {}

for (const i of myArray) {
    const type = typeof i

    if (!(type in countTypes)) {
        countTypes[type] = 0
    }

    countTypes[type]++
}

console.log(countTypes)
