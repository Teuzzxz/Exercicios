import React from "react"
import "../pag1/style.css"
import HeaderC from "./HeaderC/HeaderC"
import Corpo from "./HeaderC/corpo"

export default function App() {
	const somar = (x, y) => {
		return x + y
	}
	const name = () => {
		return "Mateus"
	}
	return (
		<>
			<HeaderC />
			<Corpo somar={somar} nome={name} />
		</>
	)
}
