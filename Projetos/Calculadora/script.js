
let res = []
let Lres = document.getElementsByTagName('p')[0]
const num = [...document.getElementsByClassName('numeros')]
const ope = [...document.getElementsByClassName('operações')]
const operações = [
    () => {
        res = []
        Lres.innerHTML = ''     
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
    // () => {
    //     res.map((v, i, a) => {
    //         console.log(res)
    //     })
    // }
]





num.map((v, p) => {
    v.addEventListener('click', () => {
            if (typeof res[res.length - 1] == 'number') {
                res[res.length - 1] = res[res.length - 1] + v.innerHTML
                res[res.length - 1] = Number(res[res.length - 1])
                Lres.innerHTML += v.innerHTML 
                console.log(res)
            } else {
                res.push(Number(v.innerHTML))
                Lres.innerHTML += v.innerHTML
                console.log(res)
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
        console.log(res)
    } else {
        res.push(val)
        Lres.innerHTML += val
        console.log(res)
    }
}





// console.log('div toda: ' + res)
//             console.log('Numero atual ' + Number(num[p].innerHTML))