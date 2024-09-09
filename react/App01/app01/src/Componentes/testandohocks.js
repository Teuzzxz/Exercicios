import React, { useState, useEffect } from "react"
export default function Teste() {
	const [val, setval] = useState("")
	const [mud, setmud] = useState(0)

	useEffect(() => {
		setmud(mud + 1)
	}, [val])
	return (
		<>
			<input
				value={val}
				onChange={(evt) => {
					setval(evt.target.value)
				}}
			></input>
			<br />
			<br />
			<br />
			<p>Texto digitado: {val}</p>
			<p>Mudanças: {mud}</p>
		</>
	)
}
