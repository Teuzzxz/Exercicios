const ButtonNumero = [...document.getElementsByClassName('number')]
let ResultadoEscrito = document.getElementsByTagName('p')[0]

ButtonNumero.map((v,p) => {   // Adiciona evento de click a todos os numeros
    v.addEventListener('click', () => {
        ResultadoEscrito.innerHTML+=String(v.innerHTML)
        
    })
})