class carro {
    constructor(nome, velomax, torque) {
        this.nome = nome
        this.velomax = velomax
        this.torque = torque
    }
}
let civic = new carro('civic', 200, 18.5)
let hb20 = new carro('hb20', 160, 10)
let carros = []

carros.push(civic , hb20)


console.log(carros)
console.log('------------------------------')
console.log(carros[0].velomax)

