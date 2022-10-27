// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inseirisci una parola");
let palindromo = "";

for (let i = parola.length - 1; i >= 0; i--) {

    palindromo += parola[i];
}

if (parola === palindromo) {
    console.log(`la parola: ${parola} è palindroma`);
} else {
    console.log(`la parola: ${parola} non è palindroma`);
}