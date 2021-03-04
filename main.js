// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var lista = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];


do {
  var cognomeUtente = prompt("Dammi il tuo cognome: ");
  var cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1)
} while (!isNaN(cognomeUtente))
lista.push(cognomeUtente);
lista.sort();

for (var i = 0; i < lista.length; i++) {
  document.getElementById('risultato').innerHTML += "</br>" + "<div>" + lista[i] + "</div>";
}



// console.log(cognomeUtente);
// for (i = 0; i < lista.length; i++) {
//   if (cognomeUtente === lista[i]) {
//     console.log(i)
//   }
// }
