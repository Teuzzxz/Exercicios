const Menu = [...document.getElementsByClassName('animation')]
const linhas = [...document.getElementsByClassName('lineJs')]


Menu.map((v,p) => {
    v.addEventListener('click', () => {
        linhas[p].classList.add('line')
        let c = document.getElementsByClassName('line')
        c[c.length - 1].setAttribute('style' , `width:${Menu[p].offsetWidth}px`)
    })
})