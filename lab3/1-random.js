const giveRandomBetween = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(giveRandomBetween(15, 10))