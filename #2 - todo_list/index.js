const tarefaInput = document.getElementById("nova-tarefa");
const addTarefaBtn = document.getElementById("add-tarefa");
const listaTarefa = document.getElementById("lista-tarefas");
const abaTodas = document.getElementById("aba-todas");
const abaPendentes = document.getElementById('aba-pendentes');
const abaCompletas = document.getElementById('aba-completas');

addTarefaBtn.addEventListener('click', ()=> {
    const text = tarefaInput.value;
    if (text != ""){

        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = text;
        const removeBtn = document.createElement("button");
        novaTarefa.append(removeBtn);  
        listaTarefa.append(novaTarefa);
        tarefaInput.value = "";
        //funcionalidade de remover a tarefa
        removeBtn.addEventListener('click', () => {
            listaTarefa.removeChild(novaTarefa);
        });
        //marcar como completa
        novaTarefa.addEventListener('click', () => {
            novaTarefa.classList.toggle("completa");
        })
    }
});

function filtrarTarefas(filtro){
    const tarefas = listaTarefa.querySelectorAll("li");

    tarefas.forEach((obj) =>{
        if (filtro == "todas"){
            obj.style.display = "flex";
        } 

        else if (filtro == "completas"){
            if (obj.classList.contains("completa")){
                obj.style.display = "flex";
            } else {
                obj.style.display = "none";
            }
        } 

        else if (filtro == "pendentes"){
            if (obj.classList.contains("completa")){
                obj.style.display = "none";
            } else {
                obj.style.display = "flex";
            }
        }
    })
}

abaTodas.addEventListener('click', () => {
    abaPendentes.classList.remove("active");
    abaCompletas.classList.remove("active");
    abaTodas.classList.add("active");
    filtrarTarefas("todas");
})
abaPendentes.addEventListener('click', () => {
    abaTodas.classList.remove("active");
    abaCompletas.classList.remove("active");
    abaPendentes.classList.add("active");
    filtrarTarefas("pendentes");
})
abaCompletas.addEventListener('click', () => {
    abaPendentes.classList.remove("active");
    abaTodas.classList.remove("active");
    abaCompletas.classList.add("active");
    filtrarTarefas("completas");
})






