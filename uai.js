const num = [21, 43, 213, 54, 23, 32, 12, 'ata']

num[0] = num[0]+String(num[1])
num[0] = Number(num[0])


console.log(num[0])
console.log(typeof num[0])

num[0] = num[0] * 1000

console.log(num[0])
console.log(typeof num[0])