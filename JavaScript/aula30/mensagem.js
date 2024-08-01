const btn = document.getElementById("msh")
class caixa {
	constructor() {
		this.caixa = document.createElement("div")
		this.Btn = document.createElement("button")
		this.titulo = document.createElement("h1")
		this.mensagem = document.createElement("p")
		this.bgColor = "white"
		this.bgTitulo = "green"
		this.bgButton = "blue"
		this.Wdt = 300
		this.Hei = 250
		this.title = "Alerta"
		this.msg = "Testando"
		this.buttonInner = "Sumir"
		this.posi =
			"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"
		this.tlS = "font:normal 1.2em arial;"
		this.MP = "margin:0px;padding:2px"
		this.Spadrao()
	}
	Spadrao() {
		document.body.prepend(this.caixa)
		this.caixa.setAttribute(
			"style",
			`${this.posi}width:${this.Wdt}px;height:${this.Hei}px;background-color:${this.bgColor};border-radius:10px;display:flex;flex-direction:column;justify-content: space-between;`
		)

		this.caixa.appendChild(this.titulo)
		this.titulo.innerHTML = "teste"
		this.titulo.setAttribute(
			"style",
			this.tlS +
				this.MP +
				`;background-color:${this.bgTitulo};border-radius:10px 10px 0px 0px;`
		)

		this.caixa.appendChild(this.mensagem)
		this.mensagem.innerHTML = "teste testando teste testando"
		this.mensagem.setAttribute("style", `margin:auto;`)

		this.caixa.appendChild(this.Btn)
		this.Btn.textContent = this.buttonInner
		this.Btn.setAttribute(
			"style",
			`width:90px;height:20px;margin:20px auto;border-radius:50px;border:none;`
		)
		this.Btn.addEventListener("click", () => {
			this.caixa.remove()
		})
	}
}

btn.addEventListener("click", () => {
	let msg = new caixa()
	console.log(msg)
})
