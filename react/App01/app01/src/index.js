import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Aquivos Js/pag1/App"

const root = ReactDOM.createRoot(document.getElementById("root"))

setInterval(() => {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}, 1000)
