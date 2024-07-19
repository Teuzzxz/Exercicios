const exemplo = {
    ex1: 1,
    ex2: 2,
}
const exemplo1 = {
    ex3: 3,
    ex4: 4,
}
const exemplo2 = Object.assign(exemplo,exemplo1)

delete(exemplo2.ex1)


console.log(exemplo2);
