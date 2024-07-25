// Variáveis-------------------------------------------------------------------------------------------------------
const palco = document.getElementsByClassName("palco")[0]
const cobra_el = document.getElementById("cobra")
let radios = new Array()
let btnComeçar = document.getElementById("cobra") // provisorio
let menu_ele = document.getElementById("cobra") // provisorio
let dificuldade = 1
let inter = null
let bola_p = null
// Classes-------------------------------------------------------------------------------------------------------
class bola {
	constructor() {
		this.el = document.createElement("div")
		this.velFrente = 5
		this.dificuldade = this.nivel()
		this.posX = parseInt(Math.random() * 200)
		this.posY = parseInt(Math.random() * 400)
		this.divisivel()
		this.dirX = 1
		this.dirY = 1
		this.keypress = "d"
		this.andarFrente = true
		this.atraso = 1
		this.desenhar()
		this.movimentação()
	}
	nivel() {
		switch (dificuldade) {
			case 1:
				return 50
				break
			case 2:
				return 40
				break
			case 3:
				return 30
				break
			case 4:
				return 20
				break
			case 5:
				return 10
				break
			default:
				break
		}
	}
	divisivel() {
		while (!(this.posX % 5 == 0)) {
			this.posX++
		}
		while (!(this.posY % 5 == 0)) {
			this.posY++
		}
	}
	desenhar() {
		this.el.setAttribute(
			"style",
			`width: 20px;height: 20px;background-color: rgb(10, 238, 10) ;position:relative;left:${this.posX}px;top:${this.posY}px;border-radius:20px;`
		)
		palco.appendChild(this.el)
	}
	movimentação() {
		let intervalo = setInterval(() => {
			this.direção()

			if (this.andarFrente) {
				this.posX = this.posX + this.velFrente * this.dirX
				this.el.style.left = this.posX + "px"
			}
			if (!this.andarFrente) {
				this.posY = this.posY - this.velFrente * this.dirY
				this.el.style.top = this.posY + "px"
			}
		}, this.dificuldade + this.atraso)
		console.log(this.dificuldade, this.atraso)
		inter = intervalo
	}
	direção() {
		if (this.keypress == "d" || this.keypress == "ArrowRight") {
			this.dirX = 1
			this.andarFrente = true
		}
		if (this.keypress == "a" || this.keypress == "ArrowLeft") {
			this.dirX = -1
			this.andarFrente = true
		}
		if (this.keypress == "w" || this.keypress == "ArrowUp") {
			this.dirY = 1
			this.andarFrente = false
		}
		if (this.keypress == "s" || this.keypress == "ArrowDown") {
			this.dirY = -1
			this.andarFrente = false
		}
	}
}
class cobras extends bola {
	constructor(x, y) {
		super()
		this.posX = x
		this.posY = y
	}
}
//funções-------------------------------------------------------------------------------------------------------
const menu = () => {
	const menu_el = document.createElement("div")
	menu_el.classList.add("mnu")

	const h1_el = document.createElement("h1")
	h1_el.innerHTML = "Jogo da cobrinha"
	h1_el.classList.add("h1mnu")

	const p_el = document.createElement("p")
	p_el.innerHTML = "Escolha o nível:"
	p_el.classList.add("pmnu")

	document.body.appendChild(menu_el)
	menu_el.appendChild(h1_el)
	menu_el.appendChild(p_el)

	for (let c = 0; c < 5; c++) {
		const div_js = document.createElement("div")

		const span_js = document.createElement("span")
		span_js.classList.add("spnmnu")
		span_js.innerHTML = c + 1

		const label_js = document.createElement("input")
		label_js.setAttribute("type", "radio")
		label_js.setAttribute("name", "radio")
		label_js.classList.add("radiomnu")
		if (c == 0) {
			label_js.checked = true
		}

		div_js.appendChild(span_js)
		div_js.appendChild(label_js)
		menu_el.appendChild(div_js)
	}

	const btn_el = document.createElement("button")
	btn_el.innerHTML = "Começar"
	btn_el.classList.add("btnmnu")
	menu_el.appendChild(btn_el)

	radios = [...document.getElementsByName("radio")]
	btnComeçar = btn_el
	menu_ele = menu_el
	radios.map((v, p) => {
		v.addEventListener("click", (evt) => {
			dificuldade = p + 1
		})
	})
}
const btnVoltar = () => {
	let botao = document.createElement("button")
	botao.classList.add("btnmnu")
	botao.setAttribute("style", "position:absolute; top:-85px; left:200px;")
	botao.innerHTML = "Desistir"
	palco.appendChild(botao)
	botao.addEventListener("click", () => {
		clearInterval(inter)
		bola_p.remove()
		document.body.appendChild(menu_ele)
	})
}
menu()
btnComeçar.addEventListener("click", () => {
	btnVoltar()
	menu_ele.remove()

	let bola_principal = new bola()
	bola_p = bola_principal.el

	let cobrinhas = new cobras(bola_principal.posX, bola_principal.posY)

	window.addEventListener("keydown", (evt) => {
		let k = evt.key
		if (
			k == "d" ||
			k == "w" ||
			k == "a" ||
			k == "s" ||
			k == "ArrowLeft" ||
			k == "ArrowDown" ||
			k == "ArrowRight" ||
			k == "ArrowUp"
		) {
			bola_principal.keypress = k
			cobrinhas.keypress = k
		}
	})
})
