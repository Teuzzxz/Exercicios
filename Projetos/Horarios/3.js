var a = new Date()
var hagr = a.getHours()
if (hagr < 12) {
    document.write('<p class="days">Boa manhã</p>')
} else if (hagr < 18) {
    document.write('<p class="days">Boa Tarde</p>')
} else {
    document.write('<p class="days">Boa noite</p>')
}