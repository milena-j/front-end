/* ESERCIZIO 1
     Scrivi una funzione per cambiare il titolo 
     della pagina in qualcos'altro
  */

const changeTitle = function () {
    /* versione "estesa":
    const title = document.querySelector("div > h1");
    title.innerText = "Titolo Modificato Tramite JS";*/

    document.querySelector("div > h1").innerText = "Titolo Modificato Tramite JS";
}

changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo 
 della pagina una classe "myHeading"
*/

const addClassToTitle = function (x) {
    /* versione "estesa":
    const addClass = document.querySelector("h1");
    addClass.classList = x;*/

    document.querySelector("h1").classList = x;
}

addClassToTitle("myHeading");

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p 
 figli di un div
*/

const changePcontent = function (x) {
    const changeP = document.querySelectorAll("div > p");
    changeP.forEach(p => p.innerText = x)
}

changePcontent("Paragrafo modificato")

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà 
 href di ogni link (tranne quello nel footer) 
 con il valore https://www.google.com
*/

const changeUrls = function () {
    const changeLink = document.querySelectorAll("a:not(footer a)");

    changeLink.forEach(function (link) {
        link.href = "https://www.google.com";
    });
}

changeUrls()

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo 
 elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    const addLi = document.createElement("li");
    addLi.innerText = "elemento aggiunto";
    document.querySelector("ul#secondList").appendChild(addLi);
}

addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo 
 al primo div
*/

const addParagraph = function () {
    const addP = document.createElement("p");
    addP.innerText = "paragrafo aggiunto";
    document.querySelector("body>div").appendChild(addP);
}

addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire 
 la prima lista non ordinata
*/

const hideFirstUl = function () {
    const hide = document.querySelector("ul#firstList");
    hide.style.display = "none";
}

hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il 
 background di ogni lista non ordinata
*/

const paintItGreen = function () {
    const green = document.querySelectorAll("ul");
    green.forEach (ele => ele.style.backgroundColor = "green");
}

paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima 
 lettera dall'h1 ogni volta che l'utente 
 lo clicca
*/

const makeItClickable = function () {
    const remove = document.querySelector("div > h1");
    remove.innerText = remove.innerText.slice(0, -1);
}

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, 
 riveli l'URL del link interno come contenuto 
 di un alert()
*/

const revealFooterLink = function () {
    const reveal = document.querySelector("footer a");
    alert(reveal.href);
}

/* ESERCIZIO 11
 Crea una funzione che crei una tabella 
 nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: 
 immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {
    let selezione = document.getElementById("tableArea");
    let tabella = document.createElement("table");


}

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla 
 tabella precedentemente creata e fornisca 
 i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini 
della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del 
h2 con id "changeMyColor" con un colore 
random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali 
da ogni elemento testuale della pagina 
(puoi aiutarti con i nuovi metodi degli 
array di ES6)
*/

const deleteVowels = function () { }