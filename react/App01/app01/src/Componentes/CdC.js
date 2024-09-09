import React, { useState } from "react"

export default class Classe extends React.Component {
	constructor(props) {
		super(props)
		this.num = {
			numero: 0,
		}
	}
	adi() {
		this.setState({ numero: this.num.numero + 1 })
		console.log(this.num.numero)
	}
	render() {
		return (
			<>
				<h1>Contagem: {this.num.numero}</h1>
				<button onClick={() => this.adi()}>Adicionar</button>
			</>
		)
	}
}
