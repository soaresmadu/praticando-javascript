function limparDisplay() {
    document.getElementById("resultado").value = "";
}

function mudarSinal() {
    var valor = document.getElementById("resultado").value
    document.getElementById("resultado").value *= -1;
}

function mostrarValor(valor) {
    document.getElementById("resultado").value += valor;
}

function calcular() {
    var display = (eval(document.getElementById("resultado").value));
    document.getElementById("resultado").value = display;
}
