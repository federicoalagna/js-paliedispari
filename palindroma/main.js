'use strict'

const parola = prompt("Inserisci una parola:");
console.log(parola)

function palindroma (parola) {

    let parolaReverse = parola.split("").reverse().join("");
    console.log(`Parola invertita: ${parola.split("").reverse().join("")}`);
    
    return parola === parolaReverse;
  }
  