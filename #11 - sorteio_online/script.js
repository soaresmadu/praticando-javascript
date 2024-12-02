const itensInput = document.getElementById('itensInput');
const sorteioBtn = document.getElementById('sorteioBtn');
const resultado = document.getElementById('resultado');
const novoBtn = document.getElementById('novoBtn');

function sortearNome(){
    const itens = itensInput.value.split(/[\n,]+/);

    const randomI = Math.floor(Math.random() * itens.length);

    if (itens[randomI] == ""){
        resultado.textContent = "Lista vazia! Favor digitar ao menos dois nomes/itens."
    } else {
        resultado.textContent = "RESULTADO = " + itens[randomI];
        sorteioBtn.style.display = "none";
        itensInput.style.display = "none";
        novoBtn.style.display = "flex";
    }
}

function reiniciarPag(){
    resultado.textContent = "";
    itensInput.style.display = "flex";
    sorteioBtn.style.display = "flex";
    novoBtn.style.display = "none";
    itensInput.value = "";
}

sorteioBtn.addEventListener('click', sortearNome);
novoBtn.addEventListener('click', reiniciarPag);