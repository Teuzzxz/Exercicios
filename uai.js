const num = [103321, 23203, 30332,321 ]
let sn = num[0].toString().split('').map(Number);  
sn.pop()
sn.map((v,i) => {
    v[i + 1] = v[i] + v[i + 1] 
})

console.log(num.length )
console.log(sn)