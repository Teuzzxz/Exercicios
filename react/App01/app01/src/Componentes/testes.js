import { useState } from "react"

export default function Teste() {
	const [dados, setdados] = useState({ nome: "", curso: "", idade: "" })
	const manipular = (e) => {
		if (e.target.name == "nome") {
			setdados({ nome: e.target.value, curso: dados.curso, idade: dados.idade })
		} else if (e.target.name == "curso") {
			setdados({ nome: dados.nome, curso: e.target.value, idade: dados.idade })
		} else if (e.target.name == "idade") {
			setdados({ nome: dados.nome, curso: dados.curso, idade: e.target.value })
		}
	}
	return (
		<>
			<label>nome</label>
			<input type="text" placeholder="nome" name="nome" onChange={(evt) => manipular(evt)} className="inputs" value={dados.nome}></input>
			<label>curso</label>
			<input type="text" placeholder="Curso" name="curso" onChange={(evt) => manipular(evt)} className="inputs" value={dados.curso}></input>
			<label>idade</label>
			<input type="text" placeholder="idade" name="idade" onChange={(evt) => manipular(evt)} className="inputs" value={dados.idade}></input>
			<br></br>
			<br></br>
			<br></br>
			<p>
				Seu nome é <span>{dados.nome}</span> , você está cursando <span>{dados.curso}</span> e tem <span>{dados.idade}</span> anos
			</p>
			<button
				onClick={() => {
					setdados({ nome: "", curso: "", idade: "" })
				}}
			>
				Resetar
			</button>
		</>
	)
}
