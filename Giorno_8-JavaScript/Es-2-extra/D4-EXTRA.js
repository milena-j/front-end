// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali 
 (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * 10));
    }
    return arr
}

function checkArray() {
    let numRan = giveMeRandom(10);
    console.log(numRan);
    let somma = 0;
    let x = [];

    for (let i in numRan) {
        if (numRan[i] > 5) {
            x.push(true);
            somma += numRan[i];
        } else {
            x.push(false);
        }
    } console.log(x);
    return somma;
}

console.log(checkArray())

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti 
 ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto 
delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
    {
        price: 27,
        name: "prodA",
        id: 102030,
        quantity: 2
    },
    {
        price: 93,
        name: "prodB",
        id: 405060,
        quantity: 1
    }
];

function shoppingCartTotal() {
    let y = 0;

    for (let i in shoppingCart) {
        y += shoppingCart[i].price * shoppingCart[i].quantity;
    } return y;
}

console.log(shoppingCartTotal())

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti 
 chiamato "shoppingCart". Ognuno di questi oggetti 
 ha le seguenti proprietà: "price", "name", "id" 
 e "quantity".
 Crea una funzione chiamata "addToShoppingCart" 
 che riceve un nuovo oggetto dello stesso tipo, 
 lo aggiunge a "shoppingCart" e ritorna il nuovo 
 numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart() {

    let newProd = {
        price: 37,
        name: "prodC",
        id: 708090,
        quantity: 4
    }
    shoppingCart.push(newProd);
    return shoppingCart;
}

console.log(addToShoppingCart())
console.log(shoppingCartTotal())

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti 
 chiamato "shoppingCart". Ognuno di questi oggetti 
 ha le seguenti proprietà: "price", "name", "id" 
 e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che 
 riceve l'array "shoppingCart" e ritorna l'oggetto 
 più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart() {
    let indice = 0;
    let prezzoMax = 0;
    for (let i in shoppingCart) {
        if (shoppingCart[i].price > prezzoMax) {
            prezzoMax = shoppingCart[i].price
            indice = i;
        }
    } return shoppingCart[indice];
}

console.log(maxShoppingCart())


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti 
 chiamato "shoppingCart". Ognuno di questi oggetti 
 ha le seguenti proprietà: "price", "name", "id" 
 e "quantity".
 Crea una funzione chiamata "latestShoppingCart" 
 che riceve l'array "shoppingCart" e ritorna l'ultimo 
 elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart() {
    return shoppingCart[shoppingCart.length - 1]
}

console.log(latestShoppingCart())

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve 
 un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa 
 un numero casuale tra 0 e 9 finchè il numero 
 casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(y) {
    let count = 0;

    while (count < 3) {
        let z = Math.random() * 9;
        console.log(z)
        if (z > y) {
            count++
        } else {
            count = 0;
        }
    }
}

console.log(loopUntil(5))

/* EXTRA 7
Crea una funzione chiamata "average" che riceve 
un array come parametro e ne ritorna la media 
aritmetica. La funzione salta automaticamente 
i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(array) {
    let b = 0;
    let c = 0;

    for (let i in array) {
        if (typeof array[i] === 'number') {
            b += array[i];
            c++;
        }
    } return b / c
}

console.log(average([2, 7, 4, "ciao", 5, "x", 9]))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova 
 la stringa più lunga all'interno di un array 
 di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(array) {
    let valMax = 0;
    let indice = 0;

    for (let i in array) {
        let c = array[i].length;
        if (c > valMax) {
            valMax = c;
            indice = i;
        }
    }
    return array[indice]
}

console.log(longest(["prima", "seconda", "terza", "quarta"]))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam 
 per la tua casella email. La funzione riceve un 
 parametro stringa chiamato "emailContent", 
 e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" 
 non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtro(emailContent) {
    return (emailContent.indexOf("SPAM") > 0 || emailContent.indexOf("SCAM") > 0)
}

console.log(filtro("CIAO SPAM"))
console.log(filtro("CIAO"))
console.log(filtro("CIAO SCAM"))
console.log(filtro("SPAM SCAM"))

/* EXTRA 10
 Scrivi una funzione che riceve una data come 
 parametro, e calcola il numero di giorni passati 
 da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcoloData(data) {
    // Converte la data passata come parametro in un oggetto Data.
    const dataFornita = new Date(data);

    // Ottiene la data corrente.
    const dataCorrente = new Date();

    // Calcola la differenza tra le due date in millisecondi.
    const differenzaInMillisecondi = dataCorrente - dataFornita;

    // Converte la differenza in millisecondi in giorni.
    const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
    const giorniPassati = Math.floor(differenzaInMillisecondi / millisecondiInUnGiorno);

    return giorniPassati;
}

console.log(calcoloData("2022-11-05"))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" 
che riceve come parametri due numeri interi, 
 "x" e "y".
 Il risultato deve essere una matrice di
 "x" volte "y", e i valori devono rispecchiare 
 gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
    let a = [];
    for (let i = 0; i < x; i++) {
        let row = [];
        for (let j = 0; j < y; j++) {
            row.push(i + '' + j);
        } a.push(row);
    } return a;
}

console.log(matrixGenerator(7, 3))