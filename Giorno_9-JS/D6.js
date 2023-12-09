/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe 
  ricevute come parametri, selezionando solamente 
  i primi 2 caratteri della prima e gli ultimi 
  3 della seconda. Converti la stringa risultante 
  in maiuscolo e mostrala con un console.log().
*/

const strConcat = (str1, str2) => {
  sommaStr = str1.slice(0, 2).concat(str2.slice(-3)).toUpperCase();
}

strConcat("prima stringa", "seconda stringa");
console.log(sommaStr);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; 
  ognuno di essi deve essere un valore random compreso 
  tra 0 e 100 (incluso).
*/

function random100(arr) {

  let box = [];

  for (let i = 0; i < arr; i++) {
    let casuale = Math.round(Math.random() * 100);
    box.push(casuale);
  } return box;
}

console.log(random100(10));

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori 
  PARI da un array composto da soli valori numerici
*/

/* così è una variabile

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrFiltrato = arrNum.filter((numPari) => numPari % 2 === 0);
console.log(arrFiltrato);
*/

// così è una funzione (freccia)

const getPari = (filterArr) => {
  return filterArr.filter((numPari) => numPari % 2 === 0)
}

console.log(getPari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti 
  in un array
*/

/* così è una variabile

let val = 0;
let arrNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrNum1.forEach((num) => { val += num });
console.log(val);
*/

// così è una funzione (freccia)

const sumEach = (arrNum1) => {
  let val = 0;
  arrNum1.forEach((num) => val += num);
  return val;
}

console.log(sumEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti 
  in un array
*/

/* così è una variabile

let arrNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = arrNum2.reduce((acc, val) => acc + val, 0);
console.log(somma);
*/

// così è una funzione (espressione)

const sumReduce = function (arrNum2) {
  return arrNum2.reduce((acc, val) => acc + val, 0);
}

console.log(sumReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri 
  e un numero n come parametri, ritorni un secondo array 
  con tutti i valori del precedente incrementati di n
*/

/* così è una variabile

let arrNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumMap = arrNum3.map((n) => n + 10);
console.log(sumMap);
*/

// così è una funzione

function sumMap(arrNum3, n) {
  return arrNum3.map(ele => ele + n);
}

console.log(sumMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, 
  ritorni un nuovo array contenente le lunghezze delle 
  rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/* così è una variabile

let arrStr = ["il", "mio", "array", "di", "stringhe"];
let newArr = arrStr.map((word) => word.length);
console.log(newArr)
*/

// così è una funzione

function newArr(arrStr) {
  return arrStr.map(ele => ele.length);
}

console.log(newArr(["il", "mio", "array", "di", "stringhe"]));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente 
  tutti i valori DISPARI da 1 a 99.
*/

const soloDisp = () => {

  let arrayDisp = [];

  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      arrayDisp.push(i)
    }
  }
  return arrayDisp;
}

console.log(soloDisp())

/* Questo array di film verrà usato negli esercizi 
a seguire. Non modificarlo e scorri oltre per 
riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio 
  nell'array fornito.
*/

const oldest = (array) => {

  let result = { Year: 2023 }

  array.forEach((film) => {
    let currentYear = +(film.Year)
    if (currentYear < result.Year) {
      result = film
    }
  })
  return result;
}

console.log(oldest(movies))

// oppure

const getOldest = (array) => {

  let old = array[0];

  array.forEach(film => {
    if (film.Year < old.Year) {
      old = film;
    }
  })
  return old;
}

console.log(getOldest(movies))

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film 
  contenuti nell'array fornito.
*/

console.log(movies.length)

//funzione:

const countMovies = (arr) => arr.length

console.log("Numero film: " + countMovies(movies))

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente 
  i titoli dei film contenuti nell'array fornito.
*/

/*variabile:
const onlyTitles = movies.map((ele) => ele.Title);
console.log(onlyTitles)
*/

//funzione

function onlyTitles(arr) {
  return arr.map(film => film.Title)
}

console.log(onlyTitles(movies))

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito 
  solamente i film usciti nel millennio corrente.
*/

/*variabile:
const millennioCorrente = movies.filter((movie) => movie.Year >= 2000)
console.log(millennioCorrente)
*/

//funzione

function millennioCorrente(arr) {
  return arr.filter(film => film.Year >= 2000)
}

console.log(millennioCorrente(movies))

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti 
  gli anni in cui sono stati prodotti i film contenuti 
  nell'array fornito.
*/

/* variabile:
const sommaAnni = movies.reduce((acc, film) => acc + +film.Year, 0);
console.log(sommaAnni);
*/

// funzione:

const sommaAnni = (arr) => {
  return arr.reduce((acc, film) => acc + +film.Year, 0);
}
console.log(sommaAnni(movies));

/*
acc è la var che uso per accumulare i valori,
a cui sommare gli anni dei film (film.Year),
a partire da 0 (l'ultimo valore)
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito 
  uno specifico film (la funzione riceve un imdbID 
    come parametro).
*/

/* variabile:
const film = movies.find(movie => movie.imdbID === "tt0057261")
console.log(film)
*/

const searchFilm = function (arr, id) {
  return arr.find(film => film.imdbID === id)
}
console.log(searchFilm(movies, "tt0057261"))

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito 
  l'indice del primo film uscito nell'anno fornito 
  come parametro.
*/

const searchIndexFilm = function (arr, year) {
  return arr.findIndex(film => film.Year === year)
}
console.log(searchIndexFilm(movies, "2012"))