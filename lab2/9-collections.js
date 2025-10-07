const phones = [
    {name: 'Vlad', phone: '+380561547828'},
    {name: 'Oleg', phone: '+380246518790'},
    {name: 'John', phone: '+380562906711'},
    {name: 'Robert', phone: '+380581092317'}
]

const findPhoneByName = (name) => {
    for (let element of phones) {
        if (element.name === name) {
            return element.phone
        }
    }
}

