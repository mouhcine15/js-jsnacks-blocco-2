const array = [];
let somma = 0;

while (somma < 50) {
    let numero = parseInt(prompt("inserisci  numero"));
    // console.log(numero);
    array.push(numero);
    somma = somma + numero;

    if (somma > 50) {
        console.log(null);
    } else {
        console.log(numero);
    }

}
// console.log(array);

