const flores = ['rosa', 'cala', 'margarita', 'violeta', 'petunia', 'clavel', 'lirio', 'jazmin', 'azahar', 'magnolia', 'girasol'];


function plantar() {

    let max = flores.length - 1;
    let min = 0;
    let nRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    let ordenador = flores[nRandom];
    let flor = prompt("Escoje una flor entre estas: rosa, cala, margarita, violeta, petunia, clavel, lirio, jazmin, azahar, magnolia, girasol", "");

    while (flor !== ordenador) {

        flor = prompt("Escoje una flor entre estas: rosa, cala, margarita, violeta, petunia, clavel, lirio, jazmin, azahar, magnolia, girasol", "");

    }

if(flor === ordenador) {

document.getElementById("respuesta").innerHTML = "Felicidades la flor era: "+ordenador;

}

}