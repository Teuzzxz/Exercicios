let QuantasSoma = 0
let res = []
let Lres = document.getElementsByTagName('p')[0]
const num = [...document.getElementsByClassName('numeros')]
const ope = [...document.getElementsByClassName('operações')]
const operações = [
    () => {
        apagar()
    },
    () => {
        Apenas1('/')
    }
    ,
    () => {
        Apenas1('*')
    }
    ,
    () => {
        Apenas1('-')
    }
    ,
    () => {
        Apenas1('+')
    },
    () => {
        if (typeof res[res.length - 1] == 'string') {
        } else {
            res.map((v, p) => {
                    verificar(v)
            })
            soma(QuantasSoma)
        }
        
    }
]





num.map((v, p) => {
    v.addEventListener('click', () => {
        if (res.length == 0  && p==6) {
        } else {
            if (typeof res[res.length - 1] == 'number') {
                res[res.length - 1] = res[res.length - 1] + v.innerHTML
                res[res.length - 1] = Number(res[res.length - 1])
                Lres.innerHTML += v.innerHTML 
            } else {
                res.push(Number(v.innerHTML))
                Lres.innerHTML += v.innerHTML
            }
        }
            

    
    })
})

ope.map((v,p) => {
    v.addEventListener('click', () => {
       operações[p]()
   }) 
})


const Apenas1 = (val) => {
    if (typeof res[res.length - 1] == 'string' || res.length == 0) {
    } else {
        res.push(val)
        Lres.innerHTML += val
    }
}


const verificar = (val) => {
    if (typeof val == 'string') {
                QuantasSoma+=1
            }
}


const soma = (v) => {
    for (let c = 0; c < v; c++) {
        res.map((v,p) => {
            if (v == '+') {
                res[p - 1] = res[p - 1] + res[p + 1]
                res.splice(p, 2)
                console.log(res)
            } else if (v == '-') {
                res[p - 1] = res[p - 1] - res[p + 1]
                res.splice(p, 2)
                console.log(res)
            } else if (v == '*') {
                res[p - 1] = res[p - 1] * res[p + 1]
                res.splice(p, 2)
                console.log(res)
            } else if (v == '/') {
                res[p - 1] = res[p - 1] / res[p + 1]
                res.splice(p, 2)
                console.log(res)
            }
        })
        Lres.innerHTML = res
    }
}

const apagar=()=> {
    if (typeof res[res.length - 1] == 'string') {
            res.pop()
            Lres.innerHTML = res.join('')
        } else {
            let sn = res[res.length - 1].toString().split('').map(Number);
            if (sn.length == 1) {
                res.pop()
                Lres.innerHTML = res.join('')
            } else {
                sn.pop()
                let soma = ''
                for (let c = 0; c < sn.length; c++){
                    soma+=String(sn[c])
                }
                res[res.length - 1] = Number(soma)
                Lres.innerHTML = res.join('')
            }
            
        }
}