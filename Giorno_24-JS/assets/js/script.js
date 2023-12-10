document.addEventListener('DOMContentLoaded', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let json = xhr.responseText;
            let obj = JSON.parse(json);

            obj.forEach(e => {
                let div = document.querySelector('#cards');

                let card = document.createElement('div');
                div.appendChild(card);

                card.innerHTML = `
                <div class="card mx-1" style="width: 18rem; height: 100%">
                <img src="${e.img}" class="card-img-top" alt="Copertina">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 class="card-title">${e.title}</h5>
                      <span class="badge rounded-pill text-bg-dark">${e.category}</span>
                    </div>
                    <div>
                      <p class="card-text">${e.price}€</p>
                      <button href="#" class="btn btn-primary">Compra ora</button>
                      <button href="#" class="btn btn-white btn-outline-danger">Scarta</button>
                    </div>
                </div>
              </div>`
            });
        }
    };

    let carrello = [];
    let cart = document.querySelector('div.modal .modal-body ul');

    // Carica il carrello dal local storage se esiste
    if (localStorage.getItem('carrello')) {
        carrello = JSON.parse(localStorage.getItem('carrello'));
        // Aggiungi gli elementi salvati nel local storage al carrello
        carrello.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('d-flex', 'my-2');
            li.innerHTML = item;
            cart.appendChild(li);
        });
    }

    document.querySelector('#cards').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.className === 'btn btn-primary') {
            let compra = e.target.parentNode.parentNode.parentNode;

            // Aggiungi il libro al carrello
            let li = document.createElement('li');
            li.classList.add('d-flex', 'my-2');
            li.innerHTML = compra.innerHTML;
            cart.appendChild(li);

            carrello.push(li.innerHTML);

            // Salva il carrello nel local storage
            localStorage.setItem('carrello', JSON.stringify(carrello));
        }
    });

    // Elimina libri dal carrello
    cart.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.className === 'btn btn-white btn-outline-danger') {
            let scarta = e.target.parentNode.parentNode.parentNode;
            scarta.remove();

            // Rimuovi il libro dal carrello e aggiorna il local storage
            carrello = carrello.filter(item => item !== scarta.innerHTML);
            localStorage.setItem('carrello', JSON.stringify(carrello));
        }
    });
});