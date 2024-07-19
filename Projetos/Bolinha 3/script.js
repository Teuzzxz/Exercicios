let QuntdBolas = document.getElementById('bolinhas')
const Add = document.getElementsByTagName('input')[1]
const Quantidade = document.getElementsByTagName('input')[0]
const palco = document.getElementById('palco')
const remov = document.getElementsByTagName('input')[2]

class bolinha{                                                 // Classe construtor
    constructor() {
        this.BolaHTML = document.createElement('div')
        this.r = parseInt(Math.random() * 255)
        this.g = parseInt(Math.random() * 255)
        this.b = parseInt(Math.random()*255)  // cores
        this.VeloX = parseInt(Math.random() * 4 + 1)
        this.Veloy = parseInt(Math.random() * 5 + 1)  // velocidade
        this.direX = Math.random() * 10 < 5 ? 1 : -1  // direção
        this.direY = Math.random() * 10 < 5 ? 1 : -1
        this.tam = parseInt(Math.random() * 10) + 10 // tamanho
        this.palcoX = palco.offsetWidth
        this.palcoY = palco.offsetHeight
        this.spanwX = parseInt(Math.random() * this.palcoX) + 20  // Área de nascimento X
        this.spanwY = parseInt(Math.random() * this.palcoY + 120)  // Área de nascimento Y
        this.posX = this.spanwX
        this.posY = this.spanwY
    }
    Desenhar() {
        this.BolaHTML.classList.add('bola')
        if (this.spanwY - 100 > palco.offsetHeight) {
            this.spanwY = this.spanwY - 100
        }
        if (this.spanwX + 20 > palco.offsetWidth) {
            this.spanwX = this.spanwX - 100
        }
        this.BolaHTML.setAttribute('style' , `height:${this.tam}px; width:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b}); left:${this.spanwX - this.tam}px; top: ${this.spanwY - this.tam}px;` )
        this.posX = this.posX - this.tam
        this.posY= this.posY - this.tam
        palco.appendChild(this.BolaHTML)
    }
    colisao() {
        if (this.posX + this.tam > palco.offsetWidth-5|| this.posX < 0) {
            this.direX=this.direX*-1
        }
        if (this.posY + this.tam > palco.offsetHeight + 90 || this.posY < 100) {
            this.direY=this.direY*-1
        }
    }
    remover() {
        if (this.posY + this.tam > palco.offsetHeight + 100 || this.posY < 90) {
            console.log('maior baixo');
            this.BolaHTML.remove()
        
        }
        if (this.posX > palco.offsetWidth) {
            this.BolaHTML.remove()
        }
    }
    movimentação() {
        this.colisao()
        this.remover()
        this.posX += this.VeloX * this.direX
        this.posY += this.Veloy * this.direY
        this.BolaHTML.style.left = this.posX + 'px'
        this.BolaHTML.style.top = this.posY + 'px'
    }
}


Add.addEventListener('click', () => {// Adiciona as bolinhas
    for (let c = 0; c < Quantidade.value; c++){
        let bola = new bolinha()
        bola.Desenhar()
        
        var intervalo = setInterval(() => {
            bola.movimentação()
        }, 10);
    }
    setInterval(Verficar,500)
})



                                 
remov.addEventListener('click', () => {
    let remover = [...palco.childNodes]
    remover.map((v) => {
        palco.removeChild(v)
    })
    
})

const Verficar = () => {
    let filhos = [...palco.childNodes]
    QuntdBolas.innerHTML = filhos.length
}

        
        
        
    



























const VerificarBolas = () => { // Verifica quantas bola há e atualiza no contador
    QuntdBolas.innerHTML=BolasArrey.length
    
}

