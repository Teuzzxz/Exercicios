const ButtonNumero = [...document.getElementsByClassName('number')] // números
const ButtonOperações = [...document.getElementsByClassName('operacoes')]
const ButtonRes = document.getElementById('resultado')
const ButtonApagar = document.getElementById('apagar')
let Res = document.getElementsByTagName('p')[0] // Resultado
let sinal = true
let decimal = true

ButtonNumero.map((v,p) => {   // Adiciona evento de click a todos os numeros
    v.addEventListener('click', (evt) => {
        if (Res.innerHTML == '0') {
            Res.innerHTML=v.innerHTML
        } else {
            Res.innerHTML += v.innerHTML
            sinal = true
        }
    })
})



ButtonOperações.map((v,p)=> { //Evento de clique as operações
    v.addEventListener('click', () => {
        if (sinal && v.innerHTML!='C') {
            Res.innerHTML += v.innerHTML
            sinal = false
        } else if (v.innerHTML == 'C') {
            Res.innerHTML = '0'
        }
    })
})

ButtonRes.addEventListener('click', () => { // Botao do resultado
    Res.innerHTML = eval(Res.innerHTML)
})


ButtonApagar.addEventListener('click', () => { // Botao de apagar
    if (Res.innerHTML != '0') {
        let apagado = ''
        for (let c = 0; c < Res.innerHTML.length - 1; c++){
            apagado+=Res.innerHTML[c]
        }
        if (sinal == false) {
            sinal=true
        }
        Res.innerHTML=apagado
    }
})