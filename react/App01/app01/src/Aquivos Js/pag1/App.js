import React from "react"
import "../pag1/style.css"
import Titulo from "../pag1/teste"

export default function App() {
	const teste = () => {
		console.log("deu certo")
	}
	return (
		<>
			<Titulo função={teste} />
			<h1></h1>
		</>
	)
}
