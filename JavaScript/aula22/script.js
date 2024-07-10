class carros{
    constructor(modelo,potencia,ano){
        this.modelo = modelo
        this.potencia = potencia
        this.ano = ano
    }
}
let ferrari = new carros('esportivo' , '730cv' , 2010)
let mercedes = new carros('Mercedes' , '480' , 2023)



console.log(ferrari)
console.log(mercedes)