import React, { useState, useEffect } from "react"
export default function Teste() {
	const [val, setval] = useState("")
	const [mud, setmud] = useState(0)

	useEffect(() => {
		setmud(mud + 1)
	}, [val])
	return (
		<>
			<input></input>
		</>
	)
}
