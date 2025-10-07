const object1 = {
    name: 'John'
}

let object2 = {
    name: 'John'
}

object1.name = 'Alex'
object2.name = 'Alex'

// неможливо, тому що посилання на object1 записане в константу
// object1 = {
//     age: 20
// }

object2 = {
    age: 20
}


const createUser = (name, city) => {
    return {name, city}
}

