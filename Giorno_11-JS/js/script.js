let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    //seleziono l'input
    let input = document.querySelector("form input");
    //console.log(input.value)

    //toglo eventuali spazi vuoti prima e dopo il testo inserito dall'utente
    let task = input.value.trim();

    //se il task è maggiore di 2
    if (task.length > 2) {
        
        //crea un punto della lista
        let li = document.createElement("li");

        //lo metto in uno span
        let span = document.createElement("span");

        //con il contenuto di "task"
        span.innerText = task;

        //per ogni click aggiungo e tolgo classe "completato" agli elementi della lista
        span.addEventListener("click", function (e) {
            e.target.className = e.target.className === "completato" ? "" : "completato";
        })

        //aggiungo lo span all'HTML
        li.appendChild(span);

        //creo un bottono per cancellare il task
        let btn2 = document.createElement("button");
        btn2.innerText = "x";

        //rimuovo l'elemento della lista
        btn2.addEventListener("click", (e) => {
            let li = e.target.parentNode;
            li.remove();
        })

        //aggiungo il bottone all'elemento della lista
        li.appendChild(btn2);

        //seleziono il contenitore in cui andrà inserito il li e lo appendo
        let ul = document.querySelector("#lista ul");
        ul.appendChild(li);

        //pulisco il campo input dopo il click
        input.value = "";
    }
})