/* Esercizio 1:
Crea una classe User per la creazione di oggetti di 
tipo “utente”. Il suo costruttore dovrà inizializzare 
ogni oggetto utente con i seguenti attributi:
firstName, lastName, age, location.
Aggiungi alla classe User anche un metodo che 
restituisca il confronto con l'età di un'altra 
persona. Ad esempio, date due istanze della classe 
utente “x” e “y” inizializzate con le proprietà 
sopra descritte, il metodo dovrà restituire una 
frase simile a “x è più vecchio di y” a seconda 
del risultato del confronto. Crea degli oggetti a 
partire dalla classe User e verifica che la 
comparazione tra le età funzioni correttamente.
*/

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto(persona) {
        if (this.age > persona.age) {
            return `${this.firstName} è più vecchio/a di ${persona.firstName}`;
        } else if (this.age < persona.age) {
            return `${this.firstName} è più giovane di ${persona.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${persona.firstName}`;
        }
    }
}

let persona1 = new User('Mario', 'Rossi', '23', 'Roma');
let persona2 = new User('Giuseppe', 'Verdi', '27', 'Milano');
let persona3 = new User('Francesca', 'Neri', '23', 'Napoli');

console.log(persona1.confronto(persona2));
console.log(persona1.confronto(persona3));
console.log(persona2.confronto(persona3));

/* Esercizio 2:
Crea un form per la creazione di oggetti “Pet” (animali domestici). 
La classe Pet dovrà essere dotata delle seguenti proprietà:
petName, ownerName, species (cane, gatto, coniglio etc.), 
breed (labrador, soriano, nano etc.)
Nella classe che utilizzerai per creare questi oggetti aggiungi 
anche un metodo che restituisca true se due animali condividono 
lo stesso padrone. Crea, raccogliendo i dati dal form, diverse 
istanze della classe Pet e mostrane i dati in una lista sottostante. */

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    checkOwner(puppy) {
        if (this.ownerName === puppy.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // alert('click') // per verificare la corretta selezione dell'elemento e dell'evento

    let form = document.querySelector('form');

    let puppy = new Pet(form[0].value, form[1].value, form[2].value, form[3].value);

    addElementToTable(puppy);
})

function addElementToTable(puppy) {
    let tbody = document.querySelector('tbody');        // seleziono il corpo della tabella
    let tr = document.createElement('tr');              // creo una riga per ogni compilazione del form

    let petNameTd = document.createElement('td');       // creo la cella in cui inserire il primo dato
    petNameTd.textContent = puppy.petName;              // scrivo il contenuto della cella appena creata
    tr.appendChild(petNameTd);                          // aggiungo la cella alla riga

    let ownerNameTd = document.createElement('td');
    ownerNameTd.textContent = puppy.ownerName;
    tr.appendChild(ownerNameTd);

    let speciesTd = document.createElement('td');
    speciesTd.textContent = puppy.species;
    tr.appendChild(speciesTd);

    let breedTd = document.createElement('td');
    breedTd.textContent = puppy.breed;
    tr.appendChild(breedTd);

    tbody.appendChild(tr);                              // aggiungo le righe alla tabella
}