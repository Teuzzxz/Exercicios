import { useState, useEffect } from "react"
import Nota from "./nota.js"
import Resultado from "./resultado.js"

export default function Teste() {
	const [notas, setnotas] = useState({ nota1: 0, nota2: 0, nota3: 0, nota4: 0, nota5: 0 })
	const trocar = (val, evt) => {
		let valor = evt.target.value
		console.log(valor)
		switch (val) {
			case 1:
				setnotas({ nota1: valor, nota2: notas.nota2, nota3: notas.nota3, nota4: notas.nota4, nota5: notas.nota5 })
				break
			case 2:
				setnotas({ nota1: notas.nota1, nota2: valor, nota3: notas.nota3, nota4: notas.nota4, nota5: notas.nota5 })
				break
			case 3:
				setnotas({ nota1: notas.nota1, nota2: notas.nota2, nota3: valor, nota4: notas.nota4, nota5: notas.nota5 })
				break
			case 4:
				setnotas({ nota1: notas.nota1, nota2: notas.nota2, nota3: notas.nota3, nota4: valor, nota5: notas.nota5 })
				break
			case 5:
				setnotas({ nota1: notas.nota1, nota2: notas.nota2, nota3: notas.nota3, nota4: notas.nota4, nota5: valor })
				break
			default:
				break
		}
	}

	return (
		<>
			<Nota num={1} valor={notas.nota1} setnotas={trocar} />
			<Nota num={2} valor={notas.nota2} setnotas={trocar} />
			<Nota num={3} valor={notas.nota3} setnotas={trocar} />
			<Nota num={4} valor={notas.nota4} setnotas={trocar} />
			<Nota num={5} valor={notas.nota5} setnotas={trocar} />
			<br></br>
			<Resultado resultado={Number(notas.nota1) + Number(notas.nota2) + Number(notas.nota3) + Number(notas.nota4) + Number(notas.nota5)} notas={setnotas} />
		</>
	)
}
