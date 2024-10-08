import React, { useState, useEffect } from "react"

export default function Carros() {
	const carros = [
		{ tipo: "sport", Preço: 60000, modelo: "Passat CC" },
		{ tipo: "sport", Preço: 230000, modelo: "Jetta GLI" },
		{ tipo: "sport", Preço: 350000, modelo: "Audi TTrs" },
		{ tipo: "SUV", Preço: 100000, modelo: "Hrv" },
		{ tipo: "SUV", Preço: 120000, modelo: "Nirvus" },
		{ tipo: "SUV", Preço: 130000, modelo: "T-Cross" },
		{ tipo: "Empresa", Preço: 90000, modelo: "Renegage" },
		{ tipo: "Empresa", Preço: 150000, modelo: "Touro" },
		{ tipo: "Empresa", Preço: 300000, modelo: "Hillux" },
	]

	const [text, setText] = useState("")

	const render = () => {
		return carros.map((v, p) => {
			if (text == v.Preço || text == v.tipo || text == v.modelo) {
				return (
					<tr key={p}>
						<td>{v.tipo}</td>
						<td>{v.Preço}</td>
						<td>{v.modelo}</td>
					</tr>
				)
			} else if (text != "sport" && text != "SUV" && text != "Empresa") {
				return (
					<tr key={p}>
						<td>{v.tipo}</td>
						<td>{v.Preço}</td>
						<td>{v.modelo}</td>
					</tr>
				)
			}
		})
	}

	return (
		<>
			<h1>Digite a categoria</h1>
			<input placeholder="Pesquisar" value={text} onChange={(e) => setText(e.target.value)}></input>
			<table>
				<tr>
					<td className="bold">Tipo:</td>
					<td className="bold">Preço</td>
					<td className="bold">modelo:</td>
				</tr>
				{render()}
			</table>
		</>
	)
}
