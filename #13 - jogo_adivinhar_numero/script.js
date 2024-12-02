const dicas = document.getElementById('dicas')
const palpiteInput = document.getElementById('palpiteInput')
const verificarBtn = document.getElementById('verificarBtn')
const statusJogo = document.getElementById('status')
const iniciarBtn = document.getElementById('iniciarBtn')
const comoJogarBtn = document.getElementById('comoJogarBtn')
const containerJogo = document.getElementById('containerJogo')
const popUpVenceu = document.getElementById('popUpVenceu')
const popUpPerdeu = document.getElementById('popUpPerdeu')
const mensagemFinal1 = document.getElementById('mensagemFinal1')
const mensagemFinal2 = document.getElementById('mensagemFinal2')
const fecharPopUp1 = document.getElementById('fecharPopUp1')
const fecharPopUp2 = document.getElementById('fecharPopUp2')
const fecharPopUp3 = document.getElementById('fecharPopUp3')
const comoJogarPopup = document.getElementById('comoJogarPopup')

let numeroCorreto = 1;

function iniciarJogo(){
    dicas.value = "";
    iniciarBtn.style.display = "none";
    containerJogo.style.display = "flex";
    palpiteInput.value = "";
    numeroTentativas = 0;
    statusJogo.textContent = "Número de tentativas: 0";

    for (i=1; i<=1; i++){
        const randomI = Math.floor(Math.random()*100)
        numeroCorreto = randomI;
        console.log(numeroCorreto);
    }
}
iniciarBtn.addEventListener('click', iniciarJogo)

let numeroTentativas = 0;

function verificarNumero(){

    if (palpiteInput.value == numeroCorreto) {
        fimdeJogo("venceu");
    } else {
        numeroTentativas++;
        statusJogo.textContent = "Número de tentativas: " + numeroTentativas;
    }

    if (palpiteInput.value < numeroCorreto){
        dicas.value = "O número que estou pensando é maior!";
    } else if (palpiteInput.value > numeroCorreto){
        dicas.value = "O número que estou pensando é menor!";
    }

    if (numeroTentativas >= 10){
        fimdeJogo("perdeu");
    }
} 

verificarBtn.addEventListener('click', verificarNumero)

function fimdeJogo(resultado){
    if (resultado == "venceu"){
        statusJogo.textContent = "VENCEU";
        iniciarBtn.style.display = "flex";
        iniciarBtn.textContent = "NOVO JOGO"
        containerJogo.style.display = "none";
        popUpVenceu.style.display = "flex";
        mensagemFinal1.textContent = "O número era: " + numeroCorreto;
    } else if (resultado == "perdeu"){
        statusJogo.textContent = "PERDEU";
        iniciarBtn.style.display = "flex";
        iniciarBtn.textContent = "NOVO JOGO"
        containerJogo.style.display = "none";
        popUpPerdeu.style.display = "flex";
        mensagemFinal2.textContent = "O número correto era: " + numeroCorreto;
    }
}

function fecharPopUps12 (){
    popUpVenceu.style.display = "none";
    popUpPerdeu.style.display = "none";
}

fecharPopUp1.addEventListener('click', fecharPopUps12)
fecharPopUp2.addEventListener('click', fecharPopUps12)

comoJogarBtn.addEventListener('click', () =>{
    comoJogarPopup.style.display = "flex"
})
fecharPopUp3.addEventListener('click', () =>{
    comoJogarPopup.style.display = "none"
})