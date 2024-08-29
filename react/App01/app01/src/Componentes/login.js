import React from "react"
import Lixeira from "../assets/lixeira.png"

export default function Paglogin() {
	const users = [
		{
			id: "damwodm2321",
			name: "Mateus",
			age: 15,
			email: "mate@gmail.com",
		},
		{
			id: "damwoadawdm2321",
			name: "André",
			age: 23,
			email: "dede@gmail.com",
		},
	]

	return (
		<>
			<div className="Login">
				<form>
					<h1>Cadastro de usuários</h1>
					<input name="nome" type="text" placeholder="nome"></input>
					<input name="idade" type="number" placeholder="idade"></input>
					<input name="email" type="email" placeholder="email"></input>
					<button>Cadastrar</button>
				</form>
				{users.map((e, p) => {
					return (
						<div className="card" key={p}>
							<div>
								<p>
									Nome: <span>{e.name}</span>
								</p>
								<p>
									Idade: <span>{e.age}</span>
								</p>
								<p>
									Email: <span>{e.email}</span>
								</p>
							</div>
							<a src="#">
								<img
									src={Lixeira}
									onClick={(evt) => {
										evt.target.parentNode.parentNode.remove()
									}}
								/>
							</a>
						</div>
					)
				})}
			</div>
		</>
	)
}
