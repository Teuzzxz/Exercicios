import React, { useState, useEffect } from "react"

export default function Nome(props) {
	const lista = ["mateus", "ramos", "dos", "santos"]

	return (
		<>
			{lista.map((e, i) => {
				return <p>{e}</p>
			})}
		</>
	)
}
