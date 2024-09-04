import React from "react"

export default function Resultado(props) {
	return (
		<div>
			<p>Soma das notas:{props.resultado}</p>
			<p>{props.resultado >= 60 ? "aprovado" : "reprovado"}</p>
			<button
				onClick={() => {
					props.notas({ nota1: 0, nota2: 0, nota3: 0, nota4: 0, nota5: 0 })
				}}
			>
				Resetar
			</button>
		</div>
	)
}
