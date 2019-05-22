var valorA;
var valorB;
var Result;

function calcular() {

    var cero = document.getElementById('cero');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('c');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var punto = document.getElementById('punto');
    var raiz = document.getElementById('raiz');
    var elevado = document.getElementById('elevado');
    var masmenos = document.getElementById('masmenos');
    var fraccion = document.getElementById('fraccion');
    var porcentaje = document.getElementById('porcentaje');
    var flecha = document.getElementById('flecha');

    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    reset.onclick = function (e) {
        resetear();
    }
    suma.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "*";
        limpiar();
    }
    division.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "/";
        limpiar();
    }
    igual.onclick = function (e) {
        valorB = resultado.textContent;
        resolver();
    }
    punto.onclick = function (e) {
        resultado.textContent = resultado.textContent + ".";
    }
    raiz.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "√";
    }
    elevado.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "x";
        limpiar();
    }
    masmenos.onclick = function (e) {
        resultado.textContent = "-" + resultado.textContent;
    }
    fraccion.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "1/x";
    }
    porcentaje.onclick = function (e) {
        valorA = resultado.textContent;
        Result = "%";
        limpiar();
    }
    flecha.onclick = function (e) {
        limpiar();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    valorA = 0;
    valorB = 0;
    Result = "";
}

function resolver() {
    var res = 0;
    switch (Result) {
        case "+":
            res = parseFloat(valorA) + parseFloat(valorB);
            break;
        case "-":
            res = parseFloat(valorA) - parseFloat(valorB);
            break;
        case "*":
            res = parseFloat(valorA) * parseFloat(valorB);
            break;
        case "/":
            res = parseFloat(valorA) / parseFloat(valorB);
            break;
        case "√":
            res = Math.sqrt(parseFloat(valorA));
            break;
        case "x":
            res = Math.pow(valorA, valorB);
            break;
        case "1/x":
            res = 1 / parseFloat(valorA);
            break;
        case "%":
            res = (parseFloat(valorA) / parseFloat(valorB)) * 100;
            break;
    }
    resetear();
    resultado.textContent = res;
}