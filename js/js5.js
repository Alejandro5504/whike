const USUARIO = document.getElementById("usuario");
const FONDO = document.body;
const imagenes = ["enigma.jpg", "descargar.jpg", "frio.jpg", "hiervas.jpg", "calor.jpg", "descargar.jpg"];


let min = 0;
let max = 500;
let nRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("El número random es:", nRandom);

let contador = 0;

function comparar() {
    let valor;

    do {
        valor = parseInt(prompt("Introduce un número entre 0 y 500:"));

        if (isNaN(valor)) {
            alert("Por favor, escribe un número válido.");
            continue;
        }

        if (valor < min || valor > max) {
            alert("El número tiene que estar entre 0 y 500.");
            continue;
        }

        let distancia = Math.abs(valor - nRandom);

        if (valor === nRandom) {
            alert("¡Acierto! Has adivinado el número.");
            FONDO.style.backgroundImage = `url('./img/${imagenes[1]}')`;
        } else if (distancia > 50) {
            alert(`Frío, frío: tu número es ${valor > nRandom ? "más grande" : "más pequeño"} que el mío`);
            FONDO.style.backgroundImage = `url('./img/${imagenes[2]}')`;
        } else if (distancia >= 15 && distancia <= 50) {
            alert(`Tibio, tibio: tu número es ${valor > nRandom ? "más grande" : "más pequeño"} que el mío`);
            FONDO.style.backgroundImage = `url('./img/${imagenes[3]}')`;
        } else if (distancia < 15) {
            alert(`Caliente, caliente: tu número es ${valor > nRandom ? "más grande" : "más pequeño"} que el mío`);
            FONDO.style.backgroundImage = `url('./img/${imagenes[4]}')`;
        }

        contador++;
        console.log("Intentos:", contador);


        document.getElementById("n").innerHTML = "Intentos:" + contador;
    }while (valor !== nRandom);

}