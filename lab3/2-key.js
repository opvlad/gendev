const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

const generateKey = (length, characters) => {
    let key = ''

    for (let i = 0; i < length; i++) {
        key += characters[Math.floor(Math.random() * characters.length)]
    }

    return key
}

console.log(generateKey(10, characters))