let Bolas = []
let QuntdBolas = document.getElementById('bolinhas')
const Add = document.getElementsByTagName('input')[1]


class bolinha{
    constructor() {
        this.VeloX = parseInt(Math.random() * 5)
        this.Veloy = parseInt(Math.random() * 5)
        this.PouNX = Math.random() * 10 < 5 ? '+' : '-'
        this.PouNY = Math.random() * 10 < 5 ? '+' : '-'
    }
}








































const VerificarBolas = () => { //Verifica quantas bola há e atualiza no contador
    let bolas = 0
    for (v of Bolas) {
        bolas++
        console.log('tem' + bolas + "bolas");
        QuntdBolas.innerHTML = bolas
    }
    
}

let teste = new bolinha()
console.log(teste);