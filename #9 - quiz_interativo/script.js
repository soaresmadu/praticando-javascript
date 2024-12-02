const question = document.getElementById('question');
const answers = document.getElementById('answers');
const iniciarBtn = document.getElementById('iniciarBtn');
const nextBtn = document.getElementById('nextBtn');
const pontuacao = document.getElementById('pontuacao');
const rightWrong = document.getElementById('rightWrong');
const reiniciarBtn = document.getElementById('reiniciarBtn');

const question1 = [
    "Qual feitiço é usado para abrir portas e janelas que não são protegidas por magias?",
    "Alohomora",
    "Avada Kedrava",
    "Abralo"
]

const question2 = [
    "Qual casa Harry pediu para que o chapéu seletor não o colocar?",
    "Corvinal",
    "Sonserina",
    "Lufa-Lufa"
]

const question3 = [
    "Qual o nome do primeiro filme da saga?",
    "Harry Potter e a Ordem da Fenix",
    "Harry Potter e a Pedra Filosofal",
    "Harry Potter e o Cálice de Fogo"
]

let currentQuestion = 0;

function iniciarJogo(){
    iniciarBtn.style.display = "none";
    pontuacao.style.display = "flex";
    currentQuestion++;

    mostrarPergunta();
}

function mostrarPergunta(){
    rightWrong.style.display = "none";
    nextBtn.style.display = "none";

    if (currentQuestion === 1){
        question.textContent = question1[0];
        for(i=1;i<=3;i++){
            const answer = document.createElement('li');
            answer.textContent = question1[i];
            answers.append(answer);
            answer.addEventListener('click', () => verificarResposta(answer.textContent, currentQuestion));
        }
    }
    else if (currentQuestion === 2){
        question.textContent = question2[0];
        for(i=1;i<=3;i++){
            const answer = document.createElement('li');
            answer.textContent = question2[i];
            answers.append(answer);
            answer.addEventListener('click', () => verificarResposta(answer.textContent, currentQuestion));
        }
    }
    if (currentQuestion === 3){
        question.textContent = question3[0];
        for(i=1;i<=3;i++){
            const answer = document.createElement('li');
            answer.textContent = question3[i];
            answers.append(answer);
            answer.addEventListener('click', () => verificarResposta(answer.textContent, currentQuestion));
        }
    }
}

const rightAnswer1 = question1[1];
const rightAnswer2 = question2[2];
const rightAnswer3 = question3[2];
let points = 0;

function verificarResposta(rightA, currentQ){
    let itsRight = false;

    if(currentQ == 1 && rightA == rightAnswer1){
        itsRight = true; 
    } 
    else if(currentQ == 2 && rightA == rightAnswer2){
        itsRight = true;
    } 
    else if(currentQ == 3 && rightA == rightAnswer3){
        itsRight = true;
    }
    
    if(itsRight){
        nextBtn.style.display = "flex";
        rightWrong.style.display = "flex";
        rightWrong.classList.remove("incorrect");
        rightWrong.classList.add("correct");
        rightWrong.textContent = "CORRETO";
        points+=1;
        pontuacao.textContent = "PONTUAÇÃO: " + points;
        zerarValores();
        currentQuestion+=1;
    } else {
        nextBtn.style.display = "flex";
        rightWrong.style.display = "flex";
        rightWrong.classList.remove("correct");
        rightWrong.classList.add("incorrect");
        rightWrong.textContent = "INCORRETO";
        pontuacao.textContent = "PONTUAÇÃO: " + points; 
        zerarValores(); 
        currentQuestion+=1;
    }

    if(currentQuestion > 3){
        fimdeJogo();
    }
}

function zerarValores(){
    question.textContent = "";
    answers.innerHTML = "";
}

function fimdeJogo(){
    pontuacao.textContent = "PONTUAÇÃO FINAL: " + points;
    rightWrong.style.display = "none";
    reiniciarBtn.style.display = "block";
    nextBtn.style.display = "none";
}

iniciarBtn.addEventListener('click', iniciarJogo);
nextBtn.addEventListener('click', mostrarPergunta);

reiniciarBtn.addEventListener('click', () => {
    location.reload();
})