var horas = 23

if (horas > 0 && horas <= 12) {
    console.log(`São ${horas} horas da manhã.`)
} else if (horas > 12 && horas <= 18) {
    console.log(`São ${horas} horas da tarde.`)
} else if (horas > 18 && horas <= 0) {
    console.log(`São ${horas} horas da noite`)
} else {
    console.log('Isso não é um horário válido')
}