'use strict';

const personNome = prompt('scrvi il tuo nome');
console.log(personNome);

const personCognome = prompt('scrivi il tuo cognome');
console.log(personCognome);

const personColor = prompt('scrivi il tuo colore preferito');
console.log(personColor);
const numCasuale = Math.floor(Math.random(1) * 100);
console.log(numCasuale);

const passGenerator = personNome + personCognome + personColor + numCasuale;
console.log(passGenerator);

document.getElementById('pass').innerHTML = 'Password:' + ' ' + passGenerator;
