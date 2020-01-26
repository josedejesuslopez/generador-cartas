const baraja = ["0","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
const palo = ["0","♠","♥","♦","♣"];

let arriba = document.querySelector("#primero");
let numero = document.querySelector("#segundo");
let abajo = document.querySelector("#tercero");



function aleatorio (maximo) {
    let numAleat = Math.floor(Math.random() * maximo) + 1;
    return numAleat
}

function genera () {
    let indiceBaraja= baraja[aleatorio (13)];
    let indicePalo = palo[aleatorio (4)];
    document.getElementById("primero").innerHTML=indicePalo;
    document.getElementById("segundo").innerHTML=indiceBaraja;
    document.getElementById("tercero").innerHTML=indicePalo;
     colorea (indicePalo);
}

function colorea (indicePalo) {
let colorcito = "black";
    if (indicePalo === "♥" || indicePalo === "♦" ) {
        colorcito = "red";
        };   
arriba.style.color = colorcito;
numero.style.color =colorcito;
abajo.style.color =colorcito;
}
