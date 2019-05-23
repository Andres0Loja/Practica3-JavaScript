var posActual = 0;
imagenes = [0];

array = [{ "id": 1, "imagen": "Imagenes/I1.jpg" },
{ "id": 2, "imagen": "Imagenes/I2.jpg" },
{ "id": 3, "imagen": "Imagenes/I3.jpg" },
{ "id": 4, "imagen": "Imagenes/I4.jpg" },
{ "id": 5, "imagen": "Imagenes/I5.jpg" },
{ "id": 6, "imagen": "Imagenes/I6.jpg" },
{ "id": 7, "imagen": "Imagenes/I7.jpg" },
{ "id": 8, "imagen": "Imagenes/I8.jpg" },
{ "id": 9, "imagen": "Imagenes/I9.jpg" },
{ "id": 10, "imagen": "Imagenes/I10.jpg" }];

function elegir() {
    for (i = 0; i < 5; i++) {
        imagenes[i] = Math.floor(Math.random() * (10));
    }
    posActual = 0;
    posicion();
    imprimir();
}
function imprimir() {
    console.log(imagenes);
    var texto = "<img src=" + array[imagenes[posActual]].imagen + ">";
    window.document.getElementById("imagen").innerHTML = texto;
}
function posicion() {
    if (posActual == 0) {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = true;
    }
    else if (posActual == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;
    }
}
function siguiente() {
    posActual++;
    posicion();
    imprimir();
}
function anterior() {
    posActual--;
    posicion();
    imprimir();
}