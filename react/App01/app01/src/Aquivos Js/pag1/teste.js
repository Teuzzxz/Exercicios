import React, { useState } from "react"

export default function Nome(props) {
	const [input, setInput] = useState("teuzin")

	return (
		<>
			<input
				onChange={(evt) => {
					console.log(evt.target.value)
					setInput(evt.target.value)
				}}
			></input>
			<h1>{input}</h1>
			<h2></h2>
		</>
	)
}
