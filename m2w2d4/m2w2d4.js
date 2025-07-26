// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
  price: [100, 5, 1],
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
  price: [10, 5, 6],
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
  price: [100, 5, 5],
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

const users = [];
users.push(marco, paul, amy);

//console.log(users);


/*for(let i = 0; i < users.length; i++) {
  const user = users[i];
  if(user.isAmbassador) {
    console.log(`${user.name} ${user.lastName} e' un ambassador`);
  } else {
    console.log(`${user.name} ${user.lastName} non e' un ambassador`);
  }
}
  */



let total = 0;

for (let i = 0; i < users.length; i++) {
  const element = users[i];
  const array = [];

  array.push(element);
  total = users[i].price.reduce((acc, current) => acc + current, 0);
  const discount = (total * 30) / 100;
  const totalWithDiscount = total - discount;
  const totDiscount = totalWithDiscount + shippingCost;
  const totalWithShipping = total + shippingCost;

  if ((element.isAmbassador === true) && (total > 100)) {

    console.log(`Il totale scontato per ${element.name} ${element.lastName} e': ${totalWithDiscount}`);
  }
  else if ((element.isAmbassador === false) && (total > 100)) {

    console.log(`Il totale per ${element.name} ${element.lastName} e': ${total}`);
  }
  else if(element.isAmbassador === false){

       console.log(`il totale del carrello di ${element.name} ${element.lastName} è : ${totalWithShipping }`);

  }
  else {
    console.log(`Il totale scontato per ${element.name} ${element.lastName} e': ${totDiscount}`);
  }



}

