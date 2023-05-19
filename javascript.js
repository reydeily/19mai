const lista = document.querySelector("#app ul")
const inpput=document.querySelector("#app input")
const botao=document.querySelector("#app buttom")

const tarefas=["estudar", "dormir"]

console.log(lista, inpput, botao)

for (const iterator of tarefas) {
	const elementTarefa = document.createElement("li")
	const textTarefa=document.createTextNode(iterator)
	console.log(iterator)	
	elementTarefa.appendChild(textTarefa)
	lista.appendChild(elementTarefa)
}