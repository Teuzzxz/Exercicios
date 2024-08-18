let money = document.getElementsByTagName("span")[0]
let btn = document.getElementsByTagName("button")[0]
let valor = 1

btn.addEventListener("click", () => {
	btn.setAttribute("style", "transform:scale(0.8)")
	setTimeout(() => {
		btn.setAttribute("style", "transform:scale(1)")
	}, 100)

	money.innerHTML = Number(money.innerHTML) + valor
})
