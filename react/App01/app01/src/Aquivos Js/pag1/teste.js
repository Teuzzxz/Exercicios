import React, { useState, useEffect } from "react"

export default function Nome(props) {
	const [num, setnum] = useState(0)
	const add = () => {
		setnum(num + 1)
	}

	return (
		<>
			<button onClick={add}>click for add</button>
			<p>{num}</p>
			{num > 10 && num < 15 && <p>toma ta lerda</p>}
		</>
	)
}
