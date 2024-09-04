import React from "react"

export default function Nota(props) {
	return (
		<div>
			<h1>Informe a nota {props.num}</h1>
			<input type="number" value={props.valor} onChange={(evt) => props.setnotas(props.num, evt)}></input>
		</div>
	)
}
