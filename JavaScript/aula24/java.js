class carros{
    constructor(marca,portas) {
        this.nacionalidade = 'Brasileiro'
        this.marca = marca
        this.portas = portas
    }
}
class esportivo extends carros {
    constructor(marca, portas, cavalos, torque) {
        super(marca, portas)
        this.cavalos = cavalos
        this.torque = torque
    }
}
let hrv = new carros('Honda',4)
let m4 = new esportivo('Bmw M4 Competition' , 2 , 720 , 70.5)

console.log(hrv)
console.log('----------------------------')
console.log(m4)



