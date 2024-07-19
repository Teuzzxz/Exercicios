let QuntdBolas = document.getElementById('bolinhas')
const Add = document.getElementsByTagName('input')[1]
const Quantidade = document.getElementsByTagName('input')[0]
const palco = document.getElementById('palco')
const remov = document.getElementsByTagName('input')[2]
let pY = 0
let pX = 0
let posiX = ''
let posiY = ''
let sera = true
let contador = 0
let ale1 = parseInt(Math.random() * 7)
let ale2 = parseInt(Math.random() * 7)



Add.addEventListener('click', (evt) => {
    let bola = window.document.createElement('div')
    bola.classList.add('bola')
    palco.appendChild(bola)
    
    function andar() {        
        bola.style.top = `${posiY} ${pY + 100}px` 
        bola.style.left = `${posiX} ${pX}px`
        
        if (contador % 2 == 0) {
            pX += ale1
            pY += ale2
        }

        if (pX + 20 > palco.offsetWidth) {
            posiX = '-'
            clearInterval(intervalo)
            console.log('parou largura');
        } else if (pY + 20 > palco.offsetHeight) {
            posiY = '-'
            console.log('parou altura');
        }


    }
    
    let intervalo = setInterval(() => {
        andar()
    }, 10);
})



























const VerificarBolas = () => { // Verifica quantas bola há e atualiza no contador
    QuntdBolas.innerHTML=BolasArrey.length
    
}

