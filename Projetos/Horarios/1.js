var imgg = document.querySelector('img#fotoo')
if (hagr < 12) {
document.body.style.backgroundColor = 'rgb(162, 172, 72)'
imgg.src = 'manha.png'
} else if (hagr < 18) {
document.body.style.backgroundColor = 'chocolate'
imgg.src = 'tarde.png'
} else {
document.body.style.backgroundColor = 'grey'
imgg.src = 'noite.png'
}