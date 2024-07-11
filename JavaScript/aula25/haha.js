let pessoa = {
    nome:'Mateus',
    idade: 16,
}

let emJson = JSON.stringify(pessoa)
let emObjeto = JSON.parse('{"nome":"Mateus","idade":16}')




console.log(pessoa)
console.log(emObjeto)
console.log(emJson)