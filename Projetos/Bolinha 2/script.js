let BolasArrey = []
let QuntdBolas = document.getElementById('bolinhas')
const Add = document.getElementsByTagName('input')[1]
const Quantidade = document.getElementsByTagName('input')[0]
const palco = document.getElementsByClassName('palco')[0]
const remov = document.getElementsByTagName('input')[2]

class bolinha{                                                 // Classe construtor
    constructor() {
        this.r = parseInt(Math.random() * 255)
        this.g = parseInt(Math.random() * 255)
        this.b = parseInt(Math.random()*255)
        this.VeloX = parseInt(Math.random() * 5)
        this.Veloy = parseInt(Math.random() * 5)
        this.PouNX = Math.random() * 10 < 5 ? '+' : '-'
        this.PouNY = Math.random() * 10 < 5 ? '+' : '-'
        this.tamanho = parseInt(Math.random() * 10) + 10
        this.spanwX = parseInt(Math.random() * 500)
        this.spanwY = parseInt(Math.random() * 230)
        
    }
}



Add.addEventListener('click', () => {                           // Adiciona as bolinhas
    for (let c = 0; c < Quantidade.value; c++){
        let bola = new bolinha()                                // Cria a bolinha na classe
    BolasArrey.push(bola)                                       //Adiciona ela no final da array
        let BolaElemeto = document.createElement('div')         // Cria a bolinha no html
        Cb(BolaElemeto, bola.tamanho , bola.r , bola.g , bola.b , bola.PouNX , bola.PouNY , bola.spanwX , bola.spanwY)
        palco.appendChild(BolaElemeto)
        setInterval(() => {
            andar(BolaElemeto , bola.VeloX , bola.Veloy , bola.PouNX , bola.PouNY , bola.spanwX , bola.spanwY)
        }, 1000);
    }
    let intervalo = setInterval(VerificarBolas,1000)
})

const Cb=(el,T,r,g,b,NoP1,NoP2,SX,SY)=>{                        // Estilização das bolinhas
    el.style.width = `${T}px`
    el.style.height = `${T}px`
    el.style.borderRadius = '50%'
    el.style.backgroundColor = `rgba(${r},${g},${b},1)`
    el.style.position = 'absolute'
    el.style.left = `calc(50% ${NoP1} ${SX}px)`
    el.style.top = `calc(55% ${NoP2} ${SY}px)`
}                                                               // INDICE:   Cb = construçãbolinhas  ,  el = elemento  ,  T = tamanho , NoP1 = negativo ou positivo , SX = spanw aleatorio X 





remov.addEventListener('click', () => {                         // Remove as bolinhas do elemento e da array
    let remover = [...palco.childNodes]
    remover.map((v, i) => {
        palco.removeChild(v)
        BolasArrey = []
    })
})


const andar = (el,vX,vY,NoP1,NoP2,SX,SY) => {
    el.style.left = `calc(50% ${NoP1} ${SX}px + ${vX}px) `
    el.style.top = `calc(55% ${NoP1} ${SX}px + ${vY}px)`
    console.log(vX);
}





























const VerificarBolas = () => { // Verifica quantas bola há e atualiza no contador
    QuntdBolas.innerHTML=BolasArrey.length
    
}

