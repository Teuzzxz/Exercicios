import { useState } from "react"

export default function Teste() {
	const carros = ["Hrv", "Hb20", "Civic", "City", "Fit", "Sandeiro", "fox", "gol", "monza"]

	return (
		<>
			{carros.map((v, p) => {
				return <p>{v}</p>
			})}
		</>
	)
}
