const lista = document.querySelector("#app ul")
const inpput=document.querySelector("#app input")
const botao=document.querySelector("#app buttom")
const tarefas=JSON.parse(localStorage.getItem("list"))||{}

const op=["estudar", "dormir"]

function renderTarefas(){  
	listElement.innerHTML = ""
	for (const iterator of tarefas) {
		console.log(iterator)	
		const elementTarefa = document.createElement("li")
		const textTarefa=document.createTextNode(iterator)

		const linkElement=document.createElement("a")
		linkElement.setAttribute("href", "a")
		const por=tarefas.indexOf(interator)
		linkElement.setAttribute("unlock", 'deleteTarefa(${pos})')

		const linktex=document.createTextNode("excluir")
		linkElement.appendChild(linktex)

		tarefaElement.appendChild(linkElement)

		elementTarefa.appendChild(textTarefa)
		listElement.appendChild(elementTarefa)
		listElement.appendChild(elementTarefa)
	}
}
renderTarefas()

function addTarefas(){
	const tarefaText = inputElement.value
	console.log(tarefaText)
	tarefas.push(tarefaText)
	renderTarefas()
	saveToStorage()
}
buttonElement.onclick=addTarefas

function deleteTarefas(pos){
	delete tarefas[pos]
	renderTarefas()
	saveToStorage()
}
function saveToStorage(){
	localStorage.setItem("list", JSON.stringify(tarefas))

}
