/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due 
 parametri (l1, l2) e calcola l'area del rettangolo 
 associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let a = l1 * l2;
    return a;
}

let a = area(3, 9);
console.log(a)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve 
 due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, 
 ma se il valore dei due parametri è il medesimo deve 
 invece tornare la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
    if (x === y) {
        return (x + y) * 3;
    } else {
        return x + y;
    }
}

console.log(crazySum(5, 10))

//oppure

function crazySum2(x, y) {
    if (x !== y) {
        return x + y;
    } else {
        return (x + y) * 3;
    }
}

console.log(crazySum2(10, 10))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola 
 la differenza assoluta tra un numero fornito come 
 parametro e 19.
 Deve inoltre tornare la differenza assoluta 
 moltiplicata per tre qualora il numero fornito sia 
 maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(z) {
    if (z > 19) {
        return Math.abs(z - 19) * 3;
    } else {
        return Math.abs(z - 19);
    }
}

console.log(crazyDiff(10))

//oppure

function crazyDiff1(z) {

    let res = Math.abs(z - 19)

    if (z > 19) {
        return res * 3;
    }
    return res;
}

console.log(crazyDiff1(30))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta 
 un numero intero n come parametro, e ritorna true 
 se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n > 20 && n <= 100 || n === 400) {
        return true;
    }
    return false;
}

console.log(boundary(50))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta 
 una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" 
 all'inizio della stringa fornita, ma se la stringa 
 fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    if (str.startsWith("EPICODE")) {
        return str;
    } else {
        return "EPICODE" + str;
    }
}

console.log(epify(" non è contenuto nella stringa"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che 
 accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro 
 sia un multiplo di 3 o di 7. 
 (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num) {
    if (num <= 0) {
        return "errore: il numero è negativo"
    } else if (num % 3 === 0) {
        return "il numero è multiplo di 3";
    } else if (num % 7 === 0) {
        return "il numero è multiplo di 7";
    } else {
        return "il numero non è multiplo di 3 o 7"
    }
}

console.log(check3and7(49))

//oppure

function check3e7(num) {
    if (num > 0) {
        if (num % 3 === 0) {
            return "il numero è multiplo di 3";
        } if (num % 7 === 0) {
            return "il numero è multiplo di 7";
        }
        return "il numero non è multiplo di 3 o 7"
    }
    return "errore: il numero è negativo"
}

console.log(check3e7(53))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", 
 il cui scopo è invertire una stringa fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
    return string.split("").reverse().join("");
}

console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", 
 che riceve come parametro una stringa formata 
 da diverse parole.
 La funzione deve rendere maiuscola la prima 
 lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(frase) {
    
    let words = frase.split(" ");  //creo un array in cui inserire i singoli elementi della stringa

    for (let i = 0; i < words.length; i++) {     // itero ogni elemento dell'array
        let splittata = words[i].split("");     // inserisco in una variabile i singoli caratteri della parola
        splittata[0] = splittata[0].toUpperCase(); // trasformo il primo carattere in maiuscolo e lo inserisco all'inice 0 della var
        words[i] = splittata.join("");          // riunisco i caratteri in una parola unica, salvandola nell'array words
    }
    return words.join(" ");
}

console.log(upperFirst("stringa formata da diverse parole"))

// FOR EACH

function upperFirst(frase) {
    
    let words = frase.split(" ");  //creo un array in cui inserire i singoli elementi della stringa

    for(let i in words){
        let splittata = words[i].split("");     
        splittata[0] = splittata[0].toUpperCase(); 
        words[i] = splittata.join("");
    }
    return words.join(" ");
}

console.log(upperFirst("una stringa formata da diverse parole"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", 
 che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa 
 senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, stringa.length -1);
}

console.log(cutString("una stringa formata da diverse parole"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", 
 che accetta come parametro un numero n e 
 ritorna un'array contenente n numeri casuali 
 inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(Math.round(Math.random() * 10));
    }
    return arr
}

console.log(giveMeRandom(5))