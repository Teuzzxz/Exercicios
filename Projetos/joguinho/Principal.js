const cobra_el = document.getElementById("cobra");
const btnIniciar = document.getElementsByTagName("button")[0];
const palco = document.getElementsByClassName("palco")[0];
const menu = document.getElementById("menu");
const nivel = [...document.getElementsByName("nivel")];
let ini = true;

btnIniciar.addEventListener("click", () => {
	menu.style.display = "none";

	class cobra {
		constructor(cobra_el) {
			this.instru = document.createElement("p");
			this.pause = document.createElement("div");
			this.el = cobra_el;
			this.VeloFrente = this.velocalc();
			this.posX = parseInt(Math.random() * 250);
			this.posY = parseInt(Math.random() * 480);
			this.veloTempo = 50;
			this.andarFrente = true;
			this.keyPress = "";
			this.direX = 1;
			this.direY = 1;
			this.receberStyle();
			this.btnPausar();
			this.instrução();
		}

		velocalc() {
			let valR = null;
			nivel.map((v, p) => {
				if (v.checked) {
					valR = Number(v.id[1]) * 3;
				}
			});
			return valR;
		}

		receberStyle() {
			this.el.setAttribute(
				"style",
				`position:relative; top:${this.posY}px; left:${this.posX}px;`
			);
		}

		direção() {
			if (this.keyPress == "d" || this.keyPress == "ArrowRight") {
				this.direX = 1;
				this.andarFrente = true;
			} else if (this.keyPress == "a" || this.keyPress == "ArrowLeft") {
				this.direX = -1;
				this.andarFrente = true;
			}
			if (this.keyPress == "w" || this.keyPress == "ArrowUp") {
				this.direY = 1;
				this.andarFrente = false;
			} else if (this.keyPress == "s" || this.keyPress == "ArrowDown") {
				this.direY = -1;
				this.andarFrente = false;
			}
		}

		colisao() {
			if (
				this.posX > 480 ||
				this.posX < 0 ||
				this.posY < 0 ||
				this.posY > 480
			) {
				return true;
			}
		}

		andarsozinho() {
			let intervalo = setInterval(() => {
				this.direção();
				if (this.colisao()) {
					location.reload();
				}
				if (this.andarFrente) {
					this.posX = this.posX + this.VeloFrente * this.direX;
					this.el.style.left = `${this.posX}px`;
				} else if (!this.andarFrente) {
					this.posY = this.posY - this.VeloFrente * this.direY;
					this.el.style.top = `${this.posY}px`;
				}
			}, this.veloTempo);
		}

		btnPausar() {
			palco.appendChild(this.pause);
			this.pause.setAttribute(
				"style",
				`width:100px; height:40px; background-Color:white; border-Radius:20px; position:absolute; left:570px; top:50%; transform: translate(-50%,-50%); box-Shadow:0px 0px 10px rgba(0,0,0,0.2);display:flex; justify-content:center; align-items: center; cursor: default;`
			);
			this.pause.innerHTML = "Sair";
			this.pause.addEventListener("click", () => {
				location.reload();
			});
		}

		instrução() {
			this.instru.innerHTML =
				"Frente: d / ⇨ <br> Trás: a / ⇦<br> Cima: w / ⇧<br> Baixo: s / ⇩";
			this.instru.setAttribute(
				"style",
				`position:absolute; left:-200px; border:1px solid black; padding:5px;`
			);
			palco.appendChild(this.instru);
		}
	}

	let cobra_class = new cobra(cobra_el);
	console.log(cobra_class, cobra_class.VeloFrente);
	window.addEventListener("keydown", (evt) => {
		if (ini) {
			cobra_class.andarsozinho();
			ini = false;
		}

		if (
			evt.key == "w" ||
			evt.key == "s" ||
			evt.key == "a" ||
			evt.key == "d" ||
			evt.key == "ArrowLeft" ||
			evt.key == "ArrowRight" ||
			evt.key == "ArrowUp" ||
			evt.key == "ArrowDown"
		) {
			cobra_class.keyPress = evt.key;
		}
	});
});
