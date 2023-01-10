var valor=0;

//função de incrmenta +1 no contador
function incrementa() {
    valor ++;
    document.getElementById("valor").innerHTML = valor;

}

//função de decrementar -1 no contador
function decrementar() {
    valor--;
    document.getElementById("valor").innerHTML = valor;
}

//função de resetar o contador
function reset() {
    valor=0;
    document.getElementById("valor").innerHTML = valor;
}
    