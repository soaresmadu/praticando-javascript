const vermelho1 = document.getElementById('vermelho1');
const amarelo1 = document.getElementById('amarelo1');
const verde1 = document.getElementById('verde1');
const vermelho2 = document.getElementById('vermelho2');
const amarelo2 = document.getElementById('amarelo2');
const verde2 = document.getElementById('verde2');
const iniciarBtn = document.getElementById('iniciarBtn');


function iniciarSemaforo(){
    iniciarBtn.style.display = "none";

    setTimeout(() => {
        vermelho2.classList.remove("active");
        amarelo1.classList.remove("active");
        vermelho1.classList.add("active");
        verde2.classList.add("active");
    }, 0);
    setTimeout(() => {
        verde2.classList.remove("active");
        amarelo2.classList.add("active");
    }, 5000);
    setTimeout(() => {
        amarelo2.classList.remove("active");
        vermelho1.classList.remove("active");
        vermelho2.classList.add("active");
        verde1.classList.add("active");
    }, 10000);
    setTimeout(() => {
        verde1.classList.remove("active");
        amarelo1.classList.add("active");
    }, 15000);

    setInterval(iniciarSemaforo, 20000);
}

iniciarBtn.addEventListener('click', iniciarSemaforo);


