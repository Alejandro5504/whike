function activar(){

let min = 1;
console.log(min);
let max = 30;
console.log(max);
let nRandom = Math.floor(Math.random() * (max - min + 1) + min);
console.log("El numero aleatori es: ", nRandom);

let numero = parseInt(prompt("Introduce un numero", "Introduce tu numero")); //prompt = cadena, cuando se usa con numeros, usar un conversor parseInt


while (numero !== nRandom) { //aqui numero es un numero por el parseInt

    numero = parseInt(prompt("Incorrecto", "Introduce tu numero"));

}

if (numero === nRandom) {

    document.getElementById("respuesta").innerHTML = "Felicicades, lo has adivinado"

} 

}