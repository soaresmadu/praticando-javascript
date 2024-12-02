const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const iniciarBtn = document.getElementById('iniciarBtn');
const pausarBtn = document.getElementById('pausarBtn');
const zerarBtn = document.getElementById('zerarBtn');

let timer = 0;
let intervalId = null;

function iniciarCronometro(){
    timer++;

    const convertHoras =  Math.floor(timer/3600);
    const convertMinutos =  Math.floor((timer%3600)/60);
    const convertSegundos = timer % 60;
    
    if(horas.value < 9){
        horas.value = "0" + convertHoras;
    } else {
        horas.value = convertHoras;
    }
    if (minutos.value < 9){
        minutos.value = "0" + convertMinutos;
    } else {
        minutos.value = convertMinutos;
    }
    if (segundos.value < 9){
        segundos.value = "0" + convertSegundos;
    } else {
        segundos.value = convertSegundos;
    }
    
}
iniciarBtn.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(iniciarCronometro, 1000);
    }
});


function pausarCronometro(){
    clearInterval(intervalId);
    intervalId = null;
}
pausarBtn.addEventListener('click', pausarCronometro);

function zerarCronometro(){
    clearInterval(intervalId);
    intervalId = null;
    timer = 0;
    horas.value = "00";
    minutos.value = "00";
    segundos.value = "00";
}
zerarBtn.addEventListener('click', zerarCronometro);

