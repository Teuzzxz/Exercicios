import React, { useState } from "react"

export default function Render() {
	const [text, setText] = useState("")

	return (
		<>
			<h1>Tente acertar o código:</h1>
			<input value={text} onChange={(e) => setText(e.target.value)}></input>
			{text == "Mateus" && <p>Codigo certo</p>}
		</>
	)
}
