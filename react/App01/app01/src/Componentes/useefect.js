import React, { useState, useEffect } from "react"

export default function Somar() {
	const [num, setnum] = useState(0)
	let teste = 0
	useEffect(() => {
		console.log(num)
	}, [teste])
	return (
		<div>
			<h1>Contagem: {num}</h1>
			<p>O que aconteceu: {}</p>
			<button onClick={() => setnum(num + 1)}>Aumentar</button>
			<button onClick={() => setnum(num - 1)}>Diminuir</button>
		</div>
	)
}
