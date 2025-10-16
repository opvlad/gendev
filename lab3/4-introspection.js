const iface = {
    a: 7,
    name: 'Vlad',
    giveSum: (a, b) => a + b,
    greetings: (name) => console.log("Hello", name)

}

const result = []

for (const key in iface) {
    if (typeof (iface[key]) === 'function'){
        result.push([key, iface[key].length])
    }
}

console.log(result)