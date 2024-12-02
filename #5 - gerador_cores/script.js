//o math.random, multiplicado pelo número hexadecimal máximo 16777215, gera um número aleatório. esse número será convertido para hexadecimal através do método toString(16) e, caso não tenha caracteres suficientes (no caso 6), o padStart vai acrescentar 0 à esquerda para completar o número.

//criar uma função que gera uma cor aleatória em hexadecimal
//criar 5 elementos para receber 5 cores diferentes como background-color
//colocar o código de cada cor em forma de texto copiável nos elementos

const paleta = document.getElementById('paleta');
const gerarBtn = document.getElementById('gerarBtn');

function gerarNumero(){
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
}

function criarPaleta(){
    paleta.innerHTML = '';
    for (i=0; i<5; i++){
        const cor = gerarNumero();
        const div = document.createElement("div")
        div.className = "cor";
        div.style.backgroundColor = cor;
        div.innerHTML = "<span>"+cor+"</span>"
        paleta.append(div);
        
        div.addEventListener('click', () => {
            navigator.clipboard.writeText(cor);
            alert("Cor " + cor + " copiada para a área de transferência!");
        })
    }
}

gerarBtn.addEventListener('click', criarPaleta);