const caracteres = document.getElementById('caracteres');
const password = document.getElementById('password');
const valorSelecionado = document.getElementById('valorSelecionado');
const passwordBtn = document.getElementById('passwordBtn');
const warning = document.getElementById('warning');

valorSelecionado.textContent = "Número de caracteres: "+ caracteres.value;

caracteres.addEventListener('click', () => {
    valorSelecionado.textContent= "Número de caracteres: "+ caracteres.value;
})

function verifyInputs(){
    const typeOf = document.querySelector('input[name="typeOf"]:checked');

    if (typeOf){
        warning.textContent = "";
        gerarSenha(typeOf.value);
    } else {
        warning.textContent = "Selecione uma opção.";
    }
}

function gerarSenha(type){

    if (type == "onlyLetter"){
        randomL(caracteres.value);
    }
    else if (type == "alsoNumbers"){
        randomLN(caracteres.value);
    }
    else if (type == "alsoSymbols"){
        randomLNS(caracteres.value);
    }
}

function randomL(size){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let randomPassword = '';
    for (i=0; i<size; i++){
        const randomI = Math.floor(Math.random() * letters.length)
        randomPassword += letters[randomI];
    } 
    password.value = randomPassword;
}

function randomLN(size){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let randomPassword = '';
    for (i=0; i<(size-3); i++){
        const randomI = Math.floor(Math.random() * letters.length)
        randomPassword += letters[randomI];
    }
    for (i=0; i<3; i++){
        const randomI = Math.floor(Math.random()*9)
        randomPassword += randomI;
    }
    password.value = randomPassword;
}

function randomLNS(size){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const symbols = '#$@&';
    let randomPassword = '';

    for (i=0; i<(size-4); i++){
        const randomI = Math.floor(Math.random() * letters.length)
        randomPassword += letters[randomI];
    }

    for (i=0; i<2; i++){
        const randomI = Math.floor(Math.random()* symbols.length)
        randomPassword += symbols[randomI];
    }

    for (i=0; i<2; i++){
        const randomI = Math.floor(Math.random()*9)
        randomPassword += randomI;
    }

    password.value = randomPassword;
}

passwordBtn.addEventListener('click', verifyInputs);

