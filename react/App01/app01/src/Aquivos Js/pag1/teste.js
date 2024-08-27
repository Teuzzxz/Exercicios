import React, { useState, useEffect } from "react"

export default function Nome(props) {
	const [name, setname] = useState("a")
	const mudar = (val) => {
		setname(val)
	}
	useEffect(() => {
		console.log("ouve mudança")
	}, [name])
	return (
		<>
			<h1>{name}</h1>
			<button
				onClick={() => {
					mudar("primeiro")
				}}
			>
				primeiro
			</button>
			<button
				onClick={() => {
					mudar("segundo")
				}}
			>
				segundo
			</button>
			<button
				onClick={() => {
					mudar("terceiro")
				}}
			>
				terceiro
			</button>
		</>
	)
}
