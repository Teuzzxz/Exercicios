class mina {
	constructor() {
		this.caverna = document.getElementsByClassName("mineração")[0]
		this.carrinho = document.createElement("div")
		this.mina = document.createElement("div")
		this.money = document.createElement("p")
		this.direx = 1
		this.tempoMina = 10
		this.construir()
		this.Andar()
	}
	construir() {
		this.carrinho.setAttribute(
			"style",
			"width:20px;height:20px;background-color:black;position:relative;left:0px;"
		)
		//---------

		this.mina.setAttribute(
			"style",
			"width:222px;height:50px;background-color:rgba(0,0,0,0.100);margin:20px 0px 20px 0px;display:flex;align-items:center;"
		)

		//---------

		this.money.setAttribute(
			"style",
			"position:relative;left:-50px;border:1px solid black;padding:5px;"
		)
		this.money.innerHTML = 0

		//---------
		this.caverna.appendChild(this.mina)
		this.mina.appendChild(this.carrinho)
		this.mina.appendChild(this.money)
	}
	Andar() {
		let intervalo = setInterval(() => {
			this.carrinho.style.left = `${
				Number(this.carrinho.style.left.replace(/\D/g, "")) + 1 * this.direx
			}px`
			if (this.carrinho.style.left.replace(/\D/g, "") > 200) {
				clearInterval(intervalo)
				this.direx = -1
				setTimeout(() => {
					this.Andar()
				}, 1000)
			}
			if (this.carrinho.style.left.replace(/\D/g, "") < 1) {
				clearInterval(intervalo)
				this.direx = 1
				setTimeout(() => {
					this.Andar()
					this.money.innerHTML = Number(this.money.innerHTML) + 1
				}, 2000)
			}
		}, 10)
	}
}
let ata = new mina()
class elevador {
	constructor() {
		this.elevador = document.getElementsByClassName("elevador")[0]
		this.direx = 1
		this.andar()
	}
	andar() {
		this.elevador.setAttribute("style", "position:relative;top:0px")
		let intervalo = setInterval(() => {
			this.elevador.style.top =
				Number(this.elevador.style.top.replace(/\D/g, "")) +
				1 * this.direx +
				"px"
			if (this.elevador.style.top.replace(/\D/g, "") > 450) {
				clearInterval(intervalo)
			}
		}, 10)
	}
}
let ata2 = new elevador()
