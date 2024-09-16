fetch("https://rickandmortyapi.com/api/character")
	.then((res) => res.json())
	.then((res) => {
		console.log(res.results)
	})
const buscar = () => {}

document.getElementsByTagName("button")[0].addEventListener("click", () => buscar())
