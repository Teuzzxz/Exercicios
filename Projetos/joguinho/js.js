const cobra_el = document.getElementById('cobra')
let ini = true

class cobra{
    constructor(cobra_el) {
        this.el = cobra_el
        this.VeloFrente = 2
        this.posX = parseInt(Math.random()* 250)
        this.posY = parseInt(Math.random() * 480)
        this.veloTempo = 50
        this.andarFrente = true
        this.keyPress = ''
        this.direX = 1
        this.direY = 1
        this.receberStyle()
    }

    receberStyle(){
        this.el.setAttribute('style' , `position:relative; top:${this.posY}px; left:${this.posX}px;`)
    }

    direção() {
        if (this.keyPress == 'd' || this.keyPress == 'ArrowRight') {
                this.direX = 1
                this.andarFrente = true 
            } else if (this.keyPress == 'a' || this.keyPress == 'ArrowLeft') {
                this.direX = -1
                this.andarFrente = true
            }
            if (this.keyPress == 'w' || this.keyPress == 'ArrowUp') {
                this.direY = 1
                this.andarFrente = false
            } else if (this.keyPress == 's' || this.keyPress == 'ArrowDown') {
                this.direY = -1
                this.andarFrente = false
            }
    }

    colisao() {
        if (this.posX > 480 || this.posX < 0 || this.posY < 0 || this.posY > 480) {
            return true
        }
    }

    andarsozinho() {
        let intervalo = setInterval(() => {
            this.direção()
            if (this.colisao()) {
                clearInterval(intervalo)
                setTimeout(() => {
                    alert('Você perdeu')
                },300)
                ini = true
            }
            if (this.andarFrente) {
                this.posX = this.posX + (this.VeloFrente * this.direX)
                this.el.style.left = `${this.posX}px`
            }
            else if (!this.andarFrente) {
                this.posY = this.posY - this.VeloFrente * this.direY
                this.el.style.top = `${this.posY}px`
            }
            console.log(this.VeloFrente , this.posY , this.posX , this.veloTempo);

        }, this.veloTempo)
    }

}
let cobra_class = new cobra(cobra_el)



window.addEventListener('keydown', (evt) => {
    if (ini) {
        cobra_class.andarsozinho()
        ini=false
    }
    
    if (evt.key == 'w' || evt.key == 's' || evt.key == 'a' || evt.key == 'd' || evt.key == 'ArrowLeft' || evt.key == 'ArrowRight' || evt.key == 'ArrowUp' || evt.key == 'ArrowDown') {
        cobra_class.keyPress = evt.key
    }
})
