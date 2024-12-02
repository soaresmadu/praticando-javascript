const instrucoes = document.getElementById('instrucoes');
const jogarBtn = document.getElementById('jogarBtn');
const espacos = document.querySelectorAll('.space')

let jogoAtivo = false;
let jogadorAtual = 1;

function comecarJogo(){
    instrucoes.classList.remove("vencedor");
    jogarBtn.textContent = "REINICIAR"
    jogadorAtual = 1;
    instrucoes.textContent = "VEZ DO JOGADOR " + jogadorAtual;
    jogoAtivo = true;

    espacos.forEach(obj => {
        obj.textContent = "";
        obj.classList.remove("marcada");
        obj.addEventListener('click', marcarEspaco, {once: true});
    })
}

jogarBtn.addEventListener('click', comecarJogo);

function marcarEspaco(event){
    if(jogoAtivo == false) {
        return;
    }
    const espaco = event.target;
    if(jogadorAtual == 1){
        espaco.textContent = "X";
        jogadorAtual = 2;
        instrucoes.textContent = "VEZ DO JOGADOR " + jogadorAtual;
    } else if (jogadorAtual == 2) {
        espaco.textContent = "O";
        jogadorAtual = 1;
        instrucoes.textContent = "VEZ DO JOGADOR " + jogadorAtual;
    }

    verificaJogo();
}

function verificaJogo(){
    //linhas
    for (i=0; i<9; i+=3){
        if (espacos[i].textContent != "" && espacos[i].textContent == espacos[i+1].textContent && espacos[i].textContent == espacos[i+2].textContent){
        finalizarJogo(espacos[i].textContent);
        }
    }

    //colunas
    for (i=0; i<3; i++){
        if (espacos[i].textContent != "" && espacos[i].textContent == espacos[i+3].textContent && espacos[i].textContent == espacos[i+6].textContent){
        finalizarJogo(espacos[i].textContent);
        }
    }

    //diagonal
        if (espacos[0].textContent != "" && espacos[0].textContent == espacos[4].textContent && espacos[0].textContent == espacos[8].textContent) {
        finalizarJogo(espacos[0].textContent);
        }
        
        if (espacos[2].textContent != "" && espacos[2].textContent == espacos[4].textContent && espacos[2].textContent == espacos[6].textContent) {
        finalizarJogo(espacos[2].textContent); 
        }

        let empate = true;
        espacos.forEach(obj => {
            if (obj.textContent == "") {
                empate = false;
            }
        })
        if (empate) {
        finalizarJogo("empate");
        }
}

function finalizarJogo(ganhador) {
    jogoAtivo = false;
    if (ganhador == "X") {
        instrucoes.classList.add("instrucoes");
        instrucoes.classList.add("vencedor");
        instrucoes.textContent = "VENCEDOR: JOGADOR 1";
        jogarBtn.textContent = "JOGAR NOVAMENTE";
    }
    else if (ganhador == "O") {
        instrucoes.classList.add("instrucoes");
        instrucoes.classList.add("vencedor");
        instrucoes.textContent = "VENCEDOR: JOGADOR 2";
        jogarBtn.textContent = "JOGAR NOVAMENTE";
    } else {
        instrucoes.classList.add("instrucoes");
        instrucoes.classList.add("vencedor");
        instrucoes.textContent = "EMPATE";
        jogarBtn.textContent = "JOGAR NOVAMENTE";
    }
}

const comoJogarBtn = document.getElementById("comoJogarBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
comoJogarBtn.addEventListener("click", () => {
    popup.style.display = "block";
});
closePopup.addEventListener("click", () =>{
    popup.style.display = "none";
})


