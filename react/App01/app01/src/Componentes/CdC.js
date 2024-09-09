import React, { useState } from "react"

export default class Classe extends React.Component {
	constructor(props) {
		super(props)
		this.num = useState(0)
	}
	render() {
		return (
			<>
				<h1>Contagem: {this.num}</h1>
			</>
		)
	}
}
