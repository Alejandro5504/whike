function plantar() {
const flores = ['rosa', 'cala', 'margarita', 'violeta', 'petunia', 'clavel', 'lirio', 'jazmin', 'azahar', 'magnolia', 'girasol'];



    let min = 0;
    console.log(min);
    let max = flores.length-1;
    console.log(max);
    let nRandom = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("El numero aleatori es: ", nRandom);
let flor = flores[nRandom];
 console.log("El numero aleatori es: ", flor);
let usuario = "";

    let errores = 0;
    

    do {

      usuario = prompt("Introduce el nombre de una flor", "Introduce la flor"); //prompt = cadena, cuando se usa con numeros, usar un conversor parseInt


        if (usuario === flor) {

            document.getElementById("respuesta").innerHTML = "Felicicades, lo has adivinado, el numero era: " + nRandom;

            break;

        } else if (usuario !== flor) {

            errores++;

        }

    } while (errores < 5);

    if (errores === 5) {

        document.getElementById("respuesta").innerHTML = "Has alcanzado el número máximo de intentos. El número era: " + flor;

    }

}