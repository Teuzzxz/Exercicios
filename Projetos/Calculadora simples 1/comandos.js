var r = document.getElementById('RESULTADO')

var a = document.getElementById('jose').innerHTML
let soma = Number(a)

var adição = document.getElementById('MAIS').value
var subtração = document.getElementById('MENOS').value
var divisão = document.getElementById('PORCENTO').value
var multiplicação = document.getElementById('VESEZ').value

var num0 = Number(document.getElementById('num0').value)
var num1 = Number(document.getElementById('num1').value)
var num2 = Number(document.getElementById('num2').value)
var num3 = Number(document.getElementById('num3').value)
var num4 = Number(document.getElementById('num4').value)
var num5 = Number(document.getElementById('num5').value)
var num6 = Number(document.getElementById('num6').value)
var num7 = Number(document.getElementById('num7').value)
var num8 = Number(document.getElementById('num8').value)
var num9 = Number(document.getElementById('num9').value)




function nume0() {

    if (soma == 0){
        soma += num0 
    } else{
        soma += String(num0) 
    }

    document.getElementById('jose').innerHTML = soma

}
function nume1() {

    if (soma == 0){
        soma += num1 
    } else{
        soma += String(num1) 
    }

    document.getElementById('jose').innerHTML = soma

}
function nume2() {

    if (soma == 0){
        soma += num2 
    } else{
        soma += String(num2) 
    }
    document.getElementById('jose').innerHTML = soma
}
function nume3() {

    if (soma == 0){
        soma += num3 
    } else{
        soma += String(num3) 
    }
    document.getElementById('jose').innerHTML = soma
}
function nume4() {

    if (soma == 0){
        soma += num4
    } else{
        soma += String(num4) 
    }
    document.getElementById('jose').innerHTML = soma
}
function nume5() {

    if (soma == 0){
        soma += num5 
    } else{
        soma += String(num5) 
    }
    document.getElementById('jose').innerHTML = soma
}
function nume6() {

    if (soma == 0){
        soma += num6
    } else{
        soma += String(num6) 
    }
    document.getElementById('jose').innerHTML = soma
}
function nume7() {

    if (soma == 0){
        soma += num7
    } else{
        soma += String(num7) 
    }
    document.getElementById('jose').innerHTML = soma
}
function nume8() {

    if (soma == 0){
        soma += num8
    } else{
        soma += String(num8) 
    }
    document.getElementById('jose').innerHTML = soma
}
function nume9() {

    if (soma == 0){
        soma = num9
    } else{
        soma += String(num9) 
    }
    document.getElementById('jose').innerHTML = soma
}
//apagar um caracter
function apagar() {
    document.getElementById('jose').innerHTML = soma.length
}

//apagar tudo
function limpar(params) {
    soma = 0
    document.getElementById('jose').innerHTML = soma
}
function mais() {
    soma += '+'
    document.getElementById('jose').innerHTML = soma
}

function resultado() {
    document.getElementById('jose').innerHTML = 'hello word'
    
    
}