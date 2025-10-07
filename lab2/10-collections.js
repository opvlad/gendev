const phones = {
    'Vlad': '+380561547828',
    'Oleg': '+380246518790',
    'John': '+380562906711',
    'Robert': '+380581092317'
}


const findPhoneByName = (name) => {
    for (let key in phones) {
        if (key === name) {
            return phones[key]
        }
    }
}

