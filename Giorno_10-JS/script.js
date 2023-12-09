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
    green.forEach(ele => ele.style.backgroundColor = "green");
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

    // seleziono un nodo radice
    let divTableArea = document.querySelector("#tableArea");

    // creo un tag tabella
    let table = document.createElement("table");
    // table.style.border = 

    // creo le righe
    let tr = document.createElement("tr");

    // creo l'intestazione di tabella e il suo contenuto
    let th1 = document.createElement("th");
    th1.innerText = "Immagine";
    let th2 = document.createElement("th");
    th2.innerText = "Nome Prodotto";
    let th3 = document.createElement("th");
    th3.innerText = "Quantità";
    let th4 = document.createElement("th");
    th4.innerText = "Prezzo";

    // appendo i nodi th alle righe
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    // appendo il nodo tr alla tabella 
    table.appendChild(tr);

    let prodotti = ["prod 1", "prod 2", "prod 3", "prod 4", "prod 5"]

    // appendo la tabella
    divTableArea.appendChild(table);

    // faccio un ciclo per popolare la tabella
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = "Immagine"; //link img <img src="" />
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.innerText = prodotti[i];
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerText = Math.round(Math.random() * 5);
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerText = Math.round(Math.random() * 500) + ",00";
        tr.appendChild(td4);

        table.appendChild(tr);
    }
}

generateTable();

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla 
 tabella precedentemente creata e fornisca 
 i dati necessari come parametri
*/

const addRow = function (img, nome, qt, pz) {
    //aggiungo riga
    let tr = document.createElement("tr");

    //aggiungo celle e metto i parametri come valori di innerText
    let td1 = document.createElement("td");
    td1.innerHTML = img;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = nome;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = qt;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = pz;
    tr.appendChild(td4);

    //appendo la riga alla tabella
    let table = document.querySelector("#tableArea table");
    table.appendChild(tr);
}

addRow("tag-img", "nuovo prod", 3, "250,00");

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini 
della tabella quando eseguita
*/

const hideAllImages = function () {
    //seleziono i nodi
    const images = document.querySelectorAll("#tableArea table img");
    //ciclo per nascondere tutte le img
    images.forEach(img => img.style.display = "none");
}

hideAllImages();
// inserire link img, se no non funziona

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del 
h2 con id "changeMyColor" con un colore 
random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {
    let ele = document.querySelector("#changeMyColor");
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    ele.style.color = `rgb(${red},${green},${blue})`;
}

changeColorWithRandom();

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali 
da ogni elemento testuale della pagina 
(puoi aiutarti con i nuovi metodi degli 
array di ES6)
*/

const deleteVowels = function () {
    let all = document.querySelectorAll("h1, h2, h3, li, a, p, th, td")
    all.forEach(node => {
        //console.log(node.innerText)

        let arrChar = [...node.innerText]
        //console.log(arrChar)

        let arrCharFilter = arrChar.filter(char => {
            char = char.toLowerCase();
            return char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' && char !== 'y'
        })
        //console.log(arrCharFilter)

        let testo = arrCharFilter.join("")
        //console.log(testo)

        node.innerText = testo
    })
};

deleteVowels();