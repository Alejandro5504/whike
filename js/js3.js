function adivinar() {

    let min = 1;
    console.log(min);
    let max = 30;
    console.log(max);
    let nRandom = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("El numero aleatori es: ", nRandom);

    let errores = 0;
    let numero;

    do {

        numero = parseInt(prompt("Introduce un numero", "Introduce tu numero")); //prompt = cadena, cuando se usa con numeros, usar un conversor parseInt


        if (numero === nRandom) {

            document.getElementById("respuesta").innerHTML = "Felicicades, lo has adivinado, el numero era: " + nRandom;

            break;

        } else if (numero !== nRandom) {

            errores++;

        }

    } while (errores < 5);

    if (errores === 5) {

        document.getElementById("respuesta").innerHTML = "Has alcanzado el número máximo de intentos. El número era: " + nRandom;

    }

}