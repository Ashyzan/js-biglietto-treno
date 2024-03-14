console.log('funziona');


// // verifichiamo se un numero è pari o dispari
// const numero = 11;
// let resto = numero % 2;
// console.log('resto: ', resto);
// const divisione = numero / 2;
// console.log('divisione:', divisione);
// // mi calcolo il modulo 2
// //SE il resto è 0
// // if (resto === 0){
// //     console.log('il numero è pari')
// // } else{
// //     console.log('il numero è dispari')
// // }
// if(resto !== 0){
//     console.log('il numero è dispari')
// } else{
//     console.log('il numero è pari')
// }
// // - scrivo il numero è pari
// //ALTRIMENTI
// // - scrivo il numero è dispari


// // verifichiamo se una persona può votare
// //età per votare 18 anni;
// let eta = prompt('inserisci la tua età');
// eta = parseInt(eta);
// console.log(eta);
// //SE età >= a 18
// if (eta >= 18) {
//     console.log('puoi votare')
// } else {
//     console.log('non puoi votare')
// }




//BIGLIETTO DLE TRENO CON PROMPT

// chiedo i kilometri da percorrere
// let km = prompt('inserisci i km da percorrere');
// km = parseInt(km);
// console.log(km);

const km = parseInt(prompt('inserisci i km da percorrere')) ; // string / null
console.log(km, typeof km);
// chiedo l'età
// let eta = prompt('inserisci la tua età');
// eta = parseInt(eta);
// // console.log(eta);

const eta = parseInt(prompt('inserisci la tua età'))
console.log(eta, typeof eta);

// calcolo prezzo base
let prezzobase = km * 0.21
// console.log(prezzobase);

// calcolo sconto
// sconto = prezzobase * 0.20 se minorenne o 
// sconto = prezzobase * 0.40 se over 65
const sconto20 = prezzobase * 0.20
const sconto40 = prezzobase * 0.40


if (eta <= 18 ) {

  let  prezzobase = sconto20
  console.log('Il prezzo del tuo biglietto è di: ' + sconto20 + ' euro')

}

else if (eta >= 65) {

    let prezzobase = sconto40
    console.log('Il prezzo del tuo biglietto è di: ' + sconto40 + ' euro')
}

else {
    console.log('Il prezzo del tuo biglietto è di: ' + prezzobase + ' euro')
}