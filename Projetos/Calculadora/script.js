
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
            console.log('é string')
        }
        res.push(Number(v.innerHTML))
        Lres.innerHTML += v.innerHTML
        console.log(res)
    })
})

ope.map((v,p) => {
    v.addEventListener('click', () => {
       operações[p]()
   }) 
})




const Apenas1 = (val) => {
    if (typeof res[res.length - 1]=='string' || res.length ==0) {
        console.log('deu')
    } else {
        res.push(val)
        Lres.innerHTML += val
        console.log(res)
    }
}




