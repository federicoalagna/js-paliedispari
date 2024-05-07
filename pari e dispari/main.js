'use strict'


//--genero un numero casuale compreso tra due valori
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
//--definisco una funzione per verificare se il numero è pari
function pari(numero) {
    return numero % 2 === 0;
  }
  
//--chiedo all'utente di scegliere tra pari e dispari

let sceltaUtente = prompt("Pari o dispari?");

let numero1 = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log(`Il tuo numero è: ${numero1}`);

let numero2 = generaNumeroCasuale(1, 5);
console.log(`Il numero casuale generato per il computer è: ${numero2}`);

//--calcolo la somma tra i due numeri

let somma = numero1 + numero2;
console.log(somma)
//--utilizzo la funzione precedente per verificare se il numero è pari o dispari

let risultato = pari(somma) ? "pari" : "dispari";

//--confronto la somma dei due numeri con il numero dell'utente e stabilisco il vincitore

if ((sceltaUtente === "pari" && pari(somma)) || (sceltaUtente === "dispari" && !pari(somma))) {
    console.log(`Hai vinto! La somma dei numeri è ${risultato}.`);
  } else {
    console.log(`Hai perso! La somma dei numeri è ${risultato}.`);
  }