const startIp = '127.0.0.1'

const ipArray = startIp.split('.')
const ipValues = ipArray.map(element => Number(element))

ipValues[0] = ipValues[0] << 8 << 8 << 8
ipValues[1] = ipValues[0] << 8 << 8
ipValues[2] = ipValues[0] << 8

const sum = ipValues.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)