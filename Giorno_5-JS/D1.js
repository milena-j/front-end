/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. 
 Prova a spiegarli come se volessi farli comprendere 
 a un bambino.
*/

/* per le varibili di tipo numero i valori ammessi 
sono numeri interi e decimali (scritti con il punto 
  al posto della virgola) */
let numerica = 23;
console.log(numerica)

/* per le variabili di tipo stringa i valori ammessi 
sono caratteri (testi) racchiusi tra apici singoli 
o doppi */
let stringa = "ciao";
console.log(stringa)

/* per le variabili di tipo booleano i valori ammessi 
sono true o false */
let booleana = true;
console.log(booleana)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il 
 tuo nome, sotto forma di stringa.
*/

const name = "Milena";
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione 
 (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let somma = num1 + num2;
console.log(somma);

// oppure
console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il 
 numero 12.
*/

let x = 12;
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già 
  esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore 
  ad una variabile dichiarata con il costrutto const.
*/

/*
name = Jocic;
console.log(name)
/*

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" 
 appena dichiarata (che contiene il numero 12).
*/

let num3 = 4;
let sottrazione = x - num3;
console.log(sottrazione)

// oppure
let differenza = x - 4;
console.log(differenza)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 
 la stringa "john", e assegna a name2 la stringa "John" 
 (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: 
  è la stessa cosa di verificare che la loro uguaglianza 
  sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true 
 se entrambe vengono trasformate in lowercase (senza 
  cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
// let verifica = true; -> questa riga non serve
console.log(name1 === name2)

// extra

console.log(name1 === name2.toLowerCase())