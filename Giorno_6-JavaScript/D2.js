/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande 
 tra due numeri interi.
*/

console.log("ESERCIZIO 1")

let num1 = 10;
let num2 = 20;

if(num1 > num2){
  console.log(num1 + " è maggiore di " + num2)
} else if(num1 < num2){ 
  console.log(num1 + " è minore di " + num2)
} else {
  console.log(num1 + " è uguale a " + num2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" 
  in console se un numero intero fornito è diverso da 5.
*/

console.log("ESERCIZIO 2")

let val4 = 4;

if(val4 != 5){
  console.log("not equal")
} else{
  console.log("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile 
  per 5" in console se un numero fornito è 
  perfettamente divisibile per 5 (suggerimento: 
    cerca l'operatore modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 3")

let n3 = 25;

if(n3 % 5 == 0){
  console.log(n3 + " è divisibile per 5")
} else {
  console.log(n3 + " non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due 
  numeri interi, il valore di uno di essi sia 8 
  oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO 4")

let n1 = 24;
let n2 = 16;

if( n1==8 || n2==8 ){
  console.log("uno dei 2 valori è uguale a 8")
}

/* else if( n1!=8 && n2!=8 ){
  console.log("nessuno dei 2 valori è uguale a 8")
} */

else if( (n1+n2)==8 ){
  console.log("la somma dei 2 valori è uguale a 8")
} else if( (n1-n2)==8 || (n2-n1)==8 ){
  console.log("la differenza tra i 2 valori è uguale a 8")
} else {
  console.log("nessuna delle precedenti condizioni è vera")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando 
  il saldo totale del carrello dell'utente in una 
  variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello 
  supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che 
  deve essere addebitato all'utente per il checkout.
*/

console.log("ESERCIZIO 5")

let totalShoppingCart = 45;

if(totalShoppingCart>50){
  console.log("Il valore del tuo carrello supera €50, hai diritto alla spezione gratuita. Il totale da pagare è: €" + totalShoppingCart)
}else if(totalShoppingCart<=50){
  console.log("Il valore del tuo carrello non supera €50, verrà addebitato un costo di spedizione pari a €10. Il totale da pagare è: €" + (totalShoppingCart + 10))
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il 
  Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa 
  nuova promozione nell'algoritmo, determinando come 
  prima se le spedizioni sono gratuite oppure no e 
  calcolando il totale.
*/

console.log("ESERCIZIO 6")

let carrelloSenzaSconto = 80;
let carrelloScontato = carrelloSenzaSconto * 0.8;
let costoSpedizione = 10;

if(carrelloScontato>50){
  console.log("Il valore del tuo carrello supera €50, hai diritto alla spezione gratuita. Il totale da pagare è: €" + carrelloScontato)
}else if(totalShoppingCart<=50){
  console.log("Il valore del tuo carrello non supera €50, verrà addebitato un costo di spedizione pari a €10. Il totale da pagare è: €" + (carrelloScontato + 10))
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a 
  ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo 
  per ordinarle secondo il loro valore, dal più alto 
  al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("ESERCIZIO 7")


let x = 20;
let y = 150;
let z = 0.25;

if(x > y && z > x){
  console.log(z, x, y)
} else if(x > z && y > x){
  console.log(y, x, z)
} else if(y > x && z > y){
  console.log(z, y, x)
} else if(y > z && x > y){
  console.log(x, y, z)
} else if(z > x && y > z){
  console.log(y, z, x)
} else if(z > y && x > z){
  console.log(x, z, y)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito 
  sia un numero oppure no (suggerimento: cerca su un 
    motore di ricerca "typeof").
*/

console.log("ESERCIZIO 8")

let val1 = 5;

if(typeof val1 === "number"){
  console.log(val1 + " è un numero")
} else {
  console.log(val1 + " non è un numero")
}

let val3 = "'ciao'";

if(typeof val3 === "number"){
  console.log(val3 + " è un numero")
} else {
  console.log(val3 + " non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito 
  sia pari o dispari (suggerimento: cerca l'operatore 
  modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 9")

let val2 = 35;

if(val2 % 2 === 0){
  console.log(val2 + " è un numero pari")
} else{
  console.log(val2 + " è un numero dispari")
}

let val5 = 44;

if(val5 % 2 === 0){
  console.log(val5 + " è un numero pari")
} else{
  console.log(val5 + " è un numero dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che 
  mostri in console il messaggio corretto in ogni 
  circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("ESERCIZIO 10")

let val = 7;

if (val < 5) {
  console.log(val + " è meno di 5");
} else if (val < 10) {
  console.log(val + " è meno di 10");
} else {
  console.log(val + " è uguale o maggiore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice 
  per aggiungere una proprietà "city", il cui valore 
  sarà "Toronto".
*/

console.log("ESERCIZIO 11")

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente 
  fornito, scrivi del codice per rimuovere la 
  proprietà "lastName".
*/

console.log("ESERCIZIO 12")

delete me.lastName

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente 
  fornito, scrivi del codice per rimuovere 
  l'ultimo elemento della proprietà "skills".
*/

console.log("ESERCIZIO 13")

me.skills.pop()

console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente 
  vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("ESERCIZIO 14")

let arr = [];

console.log(arr)

arr.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento 
  dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("ESERCIZIO 15")

/*
arr.pop()

console.log(arr) // tolto ultimo elemento

arr.push("100")

console.log(arr) // aggiunto ultimo elemento
*/

// oppure

arr.splice(9, 1, "100")

console.log(arr)