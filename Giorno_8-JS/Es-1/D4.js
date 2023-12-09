/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due 
 parametri (l1, l2) e calcola l'area del rettangolo 
 associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let risultato = l1 * l2;
    return risultato;
}

let risultato = area(3, 9);
console.log(risultato)

//oppure

function area1(l1, l2) {
    return l1 * l2;
}

let risultato1 = area1(3, 9);
console.log(risultato1)

//oppure

const area2 = function (l1, l2) {
    let risultato2 = l1 * l2;
    console.log(risultato2)
}

area2(3, 9)

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

function crazySum2(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    return num1 + num2;
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
console.log(boundary(400))
console.log(boundary(500))

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

console.log(epify(": non è contenuta nella stringa"))
console.log(epify("EPICODE è contenuto nella stringa"))

// oppure

function epify1(str1) {
    if (str1.indexOf("EPICODE" === 0)) {
        return str1;
    }
    return "EPICODE" + str1;
}

console.log(epify1(": non è contenuta nella stringa"))
console.log(epify1("EPICODE è contenuto nella stringa"))

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

// oppure

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

// oppure

function check3n7(n) {
    if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(check3n7(12))

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

//oppure

function reverseString1(stringa) {
    let arrStr = stringa.split("");
    let arrStrRev = arrStr.reverse();
    let arrStrRevJoin = arrStrRev.join("");
    return arrStrRevJoin;
}

console.log(reverseString1("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", 
 che riceve come parametro una stringa formata 
 da diverse parole.
 La funzione deve rendere maiuscola la prima 
 lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(frase) {

    // creo un array in cui inserire i singoli elementi della stringa
    let words = frase.split(" ");

    // itero ogni elemento dell'array
    for (let i = 0; i < words.length; i++) {

        // inserisco in una variabile i singoli caratteri della parola
        let splittata = words[i].split("");

        // trasformo il primo carattere in maiuscolo e lo inserisco all'indice 0 della var
        splittata[0] = splittata[0].toUpperCase();

        // riunisco i caratteri in una parola unica, salvandola nell'array words
        words[i] = splittata.join("");
    }
    return words.join(" ");
}

console.log(upperFirst("stringa formata da diverse parole"))

// FOR EACH

function upperFirst1(frase) {

    let words = frase.split(" ");

    for (let i in words) {
        let splittata = words[i].split("");
        splittata[0] = splittata[0].toUpperCase();
        words[i] = splittata.join("");
    }
    return words.join(" ");
}

console.log(upperFirst1("una stringa formata da diverse parole"))

// oppure

function upperFirst2(str) {
    let arrStr = str.split(' ');
    let newStr = '';
    for (let i = 0; i < arrStr.length; i++) {
        let letter = arrStr[i].charAt(0).toUpperCase();
        let strSlice = arrStr[i].slice(1)
        let strUpper = letter + strSlice;
        //console.log(strUpper)
        newStr += strUpper + ' ';
    }
    //console.log(arrStr)
    return newStr;
}

console.log(upperFirst2("ciao a tutti sono epicode"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", 
 che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa 
 senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, stringa.length - 1); // si può scrivere anche solo (1, -1)
}

console.log(cutString("una stringa"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", 
 che accetta come parametro un numero n e 
 ritorna un'array contenente n numeri casuali 
 inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * 10));
    }
    return arr;
}

console.log(giveMeRandom(5))