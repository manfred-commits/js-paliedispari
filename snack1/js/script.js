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
function isPalindrome(word1){
    var reverse="";
    for(var i = word1.length-1; i>=0; i--){
        reverse+=word1[i];
        console.log(reverse);
    }
    if(word1==reverse){
        return true;
    }
    return false;
}

btnEnter.addEventListener("click",
function(){
    var userWord = (document.getElementById("word").value).toLowerCase();
    console.log(isPalindrome(userWord));
    if(isPalindrome(userWord)){
        document.getElementById("result").innerHTML="La tua parola è palindroma";
    }else{
        document.getElementById("result").innerHTML="La tua parola NON è palindroma";
    }
}
)
