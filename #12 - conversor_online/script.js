//temperatura
const valueTemp = document.getElementById('valueTemp');
const deTemperatura = document.getElementById('deTemperatura');
const paraTemperatura = document.getElementById('paraTemperatura');
const temperaturaBtn = document.getElementById('temperaturaBtn');
const resultadoTemp = document.getElementById('resultadoTemp');

function convertTemp(){
    if (deTemperatura.value != "" && valueTemp.value != "" && paraTemperatura.value != ""){

        if (deTemperatura.value == paraTemperatura.value){
            resultadoTemp.textContent = valueTemp.value;
        }

        else if (deTemperatura.value == 'c' && paraTemperatura.value == 'f'){
            let result = (valueTemp.value * 1.8) + 32;
            resultadoTemp.textContent = result.toFixed(2) + " °F";
        }
        else if (deTemperatura.value == 'f' && paraTemperatura.value == 'c'){
            let result = (valueTemp.value - 32) / 1.8;
            resultadoTemp.textContent = result.toFixed(2) + " °C";
        }
    } else {
        resultadoTemp.textContent = "Selecione opções válidas.";
    }
}
temperaturaBtn.addEventListener('click', convertTemp);

//comprimento
const valueComp = document.getElementById('valueComp');
const deComprimento = document.getElementById('deComprimento');
const paraComprimento = document.getElementById('paraComprimento');
const comprimentoBtn = document.getElementById('comprimentoBtn');
const resultadoComp = document.getElementById('resultadoComp');

function convertComp(){
    if (deComprimento.value != "" && valueComp.value != "" && paraComprimento.value != ""){
        if (deComprimento.value == paraComprimento.value){
            resultadoComp.textContent = valueComp.value + " " + paraComprimento.value;
            console.log(resultadoComp.textContent);
        }
        //de km
        else if (deComprimento.value == "km" && paraComprimento.value == "m"){
            let result = valueComp.value * 1000;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "km" && paraComprimento.value == "dm"){
            let result = valueComp.value * 10000;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "km" && paraComprimento.value == "cm"){
            let result = valueComp.value * 100000;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "km" && paraComprimento.value == "mm"){
            let result = valueComp.value * 1000000;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        //de m
        else if (deComprimento.value == "m" && paraComprimento.value == "km"){
            let result = valueComp.value / 1000;
            resultadoComp.textContent = result.toFixed(4) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "m" && paraComprimento.value == "dm"){
            let result = valueComp.value * 10;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "m" && paraComprimento.value == "cm"){
            let result = valueComp.value * 100;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "m" && paraComprimento.value == "mm"){
            let result = valueComp.value * 1000;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        //de dm
        else if (deComprimento.value == "dm" && paraComprimento.value == "km"){
            let result = valueComp.value / 10000;
            resultadoComp.textContent = result.toFixed(5) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "dm" && paraComprimento.value == "m"){
            let result = valueComp.value / 10;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "dm" && paraComprimento.value == "cm"){
            let result = valueComp.value * 10;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "dm" && paraComprimento.value == "mm"){
            let result = valueComp.value * 100;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        //de cm
        else if (deComprimento.value == "cm" && paraComprimento.value == "km"){
            let result = valueComp.value / 100000;
            resultadoComp.textContent = result.toFixed(6) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "cm" && paraComprimento.value == "m"){
            let result = valueComp.value / 100;
            resultadoComp.textContent = result.toFixed(3) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "cm" && paraComprimento.value == "dm"){
            let result = valueComp.value / 10;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "cm" && paraComprimento.value == "mm"){
            let result = valueComp.value * 10;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
        //de mm
        else if (deComprimento.value == "mm" && paraComprimento.value == "km"){
            let result = valueComp.value / 1000000;
            resultadoComp.textContent = result.toFixed(9) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "mm" && paraComprimento.value == "m"){
            let result = valueComp.value / 1000;
            resultadoComp.textContent = result.toFixed(5) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "mm" && paraComprimento.value == "dm"){
            let result = valueComp.value / 100;
            resultadoComp.textContent = result.toFixed(3) + " " + paraComprimento.value;
        }
        else if (deComprimento.value == "mm" && paraComprimento.value == "cm"){
            let result = valueComp.value / 10;
            resultadoComp.textContent = result.toFixed(2) + " " + paraComprimento.value;
        }
    } else {
        resultadoComp.textContent = "Selecione opções válidas.";
    }
}
comprimentoBtn.addEventListener('click', convertComp);