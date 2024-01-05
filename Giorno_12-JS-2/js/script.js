function creaTabellone() {
    let containerTabellone = document.querySelector("#containerTabellone");
    for (let i = 1; i < 77; i++) {
        let cellaTabellone = document.createElement("div");
        cellaTabellone.innerText = [i];
        cellaTabellone.className = "cellaTabellone";
        containerTabellone.appendChild(cellaTabellone);
    }
}
creaTabellone();

function creaCartelle(numeroCartelle) {
    let containerCartelle = document.querySelector("#containerCartelle")

    for (let j = 0; j < numeroCartelle; j++) {
        let numeriGenerati = [];

        let cartella = document.createElement("div");
        cartella.className = "cartella";

        for (let i = 1; i <= 24; i++) {
            let numeroCasuale;

            do {
                numeroCasuale = Math.ceil(Math.random() * 76);
            } while (numeriGenerati.includes(numeroCasuale));
            numeriGenerati.push(numeroCasuale);
        }

        numeriGenerati.sort((a, b) => a - b);

        for (let numeroCasuale of numeriGenerati) {
            let cellaCartella = document.createElement("div");
            cellaCartella.innerText = numeroCasuale;
            cellaCartella.className = "cellaCartella";
            cartella.appendChild(cellaCartella);
        }

        containerCartelle.appendChild(cartella);
    }
}

let numeroEstratto;

function estraiNumero() {
    let btnEstrai = document.querySelector("#estrai");
    let numeriEstratti = [];
    btnEstrai.addEventListener("click", () => {

        do {
            numeroEstratto = Math.ceil(Math.random() * 76);
        } while (numeriEstratti.includes(numeroEstratto));
        numeriEstratti.push(numeroEstratto);

        let ultimoNumEstratto = document.querySelector('#ultimoNumEstratto');
        ultimoNumEstratto.innerText = numeroEstratto;

        modificaCelleEstratte()
    })
}
estraiNumero();

function modificaCelleEstratte() {
    /* tabellone principale */
    let celleTabellone = document.querySelectorAll("#containerTabellone div");
    celleTabellone[numeroEstratto - 1].classList.add('cellaEstratta');

    /* cartella */
    let celleCartella = document.querySelectorAll("#containerCartelle div");
    for (let cellaCartella of celleCartella) {
        if (cellaCartella.innerText == numeroEstratto) {
            cellaCartella.classList.add('cellaEstratta');
        }
    }
}


let btnConferma = document.querySelector('#confermaCartelle');
btnConferma.addEventListener('click', confermaCartelle);

function confermaCartelle() {
    let numeroCartelle = parseInt(document.querySelector('#inputCartelle').value);
    if (numeroCartelle >= 1 && numeroCartelle <= 6) {
        creaCartelle(numeroCartelle);
        btnConferma.removeEventListener('click', confermaCartelle);
    } else {
        alert('Inserisci un numero compreso tra 1 e 6');
    }
}