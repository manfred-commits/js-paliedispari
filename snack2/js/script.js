// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// 1.Creare una funzione che genera un numero random tra due intervalli

function randomNumber(num1, num2){
    var result = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

// 2.Creiamo una funzione che stabilisce se un numero è pari o dispari


// 2.Creare un evento in cui vengono raccolti i dati inseriti dall'utente:
// dati sul numero inserito;
// e se il numero che il computer genera sarà pari o dispari.

var btnEnter = document.getElementById("enter");

btnEnter.addEventListener("click",
function(){
    
}
)