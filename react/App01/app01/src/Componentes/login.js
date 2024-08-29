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
					<input name="nome" type="text"></input>
					<input name="idade" type="number"></input>
					<input name="email" type="email"></input>
					<button>Cadastrar</button>
				</form>
				{users.map((e, p) => {
					return (
						<div style={{ display: "flex", backgroundColor: "grey", justifyContent: "space-between", alignItems: "center" }}>
							<div>
								<p>Nome: {users[p].name}</p>
								<p>Idade: {users[p].age}</p>
								<p>Email: {users[p].email}</p>
							</div>
							<a src="#">
								<img src={Lixeira} />
							</a>
						</div>
					)
				})}
			</div>
		</>
	)
}
