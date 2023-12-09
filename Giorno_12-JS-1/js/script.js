//data di oggi
let now = new Date();
//console.log(now)

//ultimo mese del giorno
let lastDayDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
//console.log(lastDayDate);

//numero di giorni al mese
let lastDayOfTheMonth = lastDayDate.getDate();
//console.log(lastDayOfTheMonth);

//seleziono il nodo radice
let calendar = document.querySelector("#calendar");

//creo un array
let appointments = [];

//richiamo le funzioni, se no non funzionano!
creaCalendario();
creaArrayAppuntamenti();

function creaCalendario() {

    //seleziono h2 e scrivo il contenuto
    let h2 = document.querySelector("h1+h2");
    h2.innerText = nomeMese(now.getMonth() + 1);

    //creo una cella per ogni giorno del mese
    for (let i = 1; i <= lastDayOfTheMonth; i++) {

        //creo un div
        const dayCellNode = document.createElement("div");

        //applico la classe
        dayCellNode.className = "day";

        /*aggiungo un event listener per
        colorare diversamente la cella al click
        e */
        dayCellNode.addEventListener("click", () => {
            dayCellNode.classList.add("selected");
            let currentDayAppointments = appointments[i - 1];
            if (currentDayAppointments.length > 0) {
                document.querySelector("#appointments").style.display = "block";
            } else {
                document.querySelector("#appointments").style.display = "none";
            }
        })

        //creo un h3
        const day = document.createElement("h3");

        //scrivo nell'h3
        day.innerText = i;

        //applico una classe al giorno di oggi per colorarlo diversamente
        let today = now.getDate();
        if (today === i) {
            day.className = "color-epic";
        }

        //aggiungo il giorno al div
        dayCellNode.appendChild(day);

        //aggiungo il div al nodo radice
        calendar.appendChild(dayCellNode);
    }
}

function nomeMese(m) {
    switch (m) {
        case 1: return "Gennaio";
        case 2: return "Febbraio";
        case 3: return "Marzo";
        case 4: return "Aprile";
        case 5: return "Maggio";
        case 6: return "Giugno";
        case 7: return "Luglio";
        case 8: return "Agosto";
        case 9: return "Settembre";
        case 10: return "Ottobre";
        case 11: return "Novembre";
        case 12: return "Dicembre";
    }
}

function creaArrayAppuntamenti() {
    //itero il num di giorni
    for (let i = 0; i < lastDayOfTheMonth; i++) {
        appointments[i] = [];
    }
}

function selezionaGiorno(day) {
    
    day.classList
}