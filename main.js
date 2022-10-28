// * 1)Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// let parola = prompt("Inseirisci una parola");

// function ErPalindromo(){
//   let palindromo = '';

//   for (let i = parola.length - 1; i >= 0; i--) {
//   palindromo += parola[i];
//   }
//   return palindromo;
// }

// if (parola == ErPalindromo()) {
//     console.log(`la parola: ${parola} è palindroma`);
// } else {
//     console.log(`la parola: ${parola} non è palindroma`);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// * 2)Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
let scelta = prompt("Scegli pari o dispari");
console.log(scelta);

let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`tuo numero: ${numeroUtente}`);

function numeroPc(){
  let numeroRandomPc = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  return numeroRandomPc;
}

let numRandomPc = numeroPc();

console.log(`Numero CPU: ${numRandomPc}`);

function somma(x,y){
  let somma = x + y;
  return somma;
}

console.log(`La somma è: ${somma(numeroUtente, numRandomPc)}`);

function PariDispari(){
  let controllo = '';
  if(somma % 2 == 0){
    controllo = 'pari';
    return controllo;
  } else {
    controllo = 'dispari';
    return controllo;
  }
}

if(scelta == PariDispari()){
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}