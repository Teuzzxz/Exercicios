const btn = document.getElementsByClassName('line-toda')[0]
let linhas = [...document.getElementsByClassName('line')]
let cont = 0
const lista = document.getElementsByTagName('ul')[0]
const vallista = [...document.getElementsByTagName('li')]
let Capeta = [...document.getElementsByClassName('liaparece')]
let tela = screen.width
console.log(tela)
btn.addEventListener('click' , ()=>{
    linhas.map((val,posi)=>{
        val.classList.toggle(`roda${posi + 1}`)})
        
    vallista.map((v,p)=>{
        v.classList.toggle('liaparece')

    })    
        if(cont==0){
            lista.classList.add('listaaparece')
            cont++
        } else if(cont%2!=0){
            animação()
        } else if (cont%2==0){
            animação()
        }
        
          
})

console.log(Capeta)
const animação=()=>{
    lista.classList.toggle('listasome')
    lista.classList.toggle('listaaparece')
}