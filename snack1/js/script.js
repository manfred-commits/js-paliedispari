// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Una parola si definisce palindroma, se leggendola dall'inizio alla fine e viceversa, viene letta nello stesso modo.

// es: anna

// 1. creare un evento che fornisca, al click del bottone Invio, se la frase inserita dall'utente (nell'input) è palindroma

var btnEnter = document.getElementById("enter");

btnEnter.addEventListener("click",
function(){
    alert("hello!");
    var userWord = document.getElementById("word").value;
    console.log(userWord);
}
)
