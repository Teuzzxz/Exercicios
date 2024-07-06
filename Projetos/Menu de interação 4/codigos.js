const BotaoFeito = document.getElementById('BotaoFeito')
let cont = 0 
const otlado = document.querySelector('div.otlado')
const LIs = [...document.getElementsByTagName('li')]
const uls = document.getElementsByTagName('ul')[0]

BotaoFeito.addEventListener('click' , ()=>{
    if(cont%2==0){
        otlado.style.transform = 'translateX(-100%)'
        cont++
        LIs.map((v,p)=>{
            v.style.opacity = '100%'
            v.style.transform = `translate(-125px)`
            v.style.transition = `${alternar(p)}s`
        })
    }else{
        otlado.style.transform = 'translateX(0px)'
        cont++
        LIs.map((v,p)=>{
            v.style.transform = 'translate(0px)'
        })
    }
    

})


const alternar=(valor)=>{
    if(valor==0){
        return 0.50
    } else if(valor==1){
        return 0.75
    }else if (valor==2){
        return 1
    } else if (valor==3){
        return 1.25
    }
}