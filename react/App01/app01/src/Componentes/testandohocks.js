import React, { useState, useEffect, useMemo } from "react"

export default function Teste() {
	let [num, setnum] = useState(0)
	let ata = useMemo(() => {
		console.log("ai neymar")
	}, [num])

	const [text, setText] = useState("")

	return (
		<>
			<input value={text} onChange={(e) => setText(e.target.value)}></input>
			<p>{text}</p>
			<button onClick={() => setnum(num + 1)}>clica bb clica</button>
			<p>{num}</p>
		</>
	)
}
