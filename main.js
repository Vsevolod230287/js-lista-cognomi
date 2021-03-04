
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var listaCognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

var cognomeUtente = prompt("Dammi il tuo cognome: ");
listaCognomi.push(cognomeUtente);
listaCognomi.sort();
console.log(listaCognomi);

console.log(cognomeUtente);
for (i = 0; i < listaCognomi.length; i++) {
  if(cognomeUtente === listaCognomi[i]) {
    console.log(i)
  }
}
