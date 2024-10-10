/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const area = function(l1,l2){
//      return l1*l2 
//     }

// const result = area(4, 3)
// console.log("L'area del rettangolo è pari a: ", result)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const crazySum = function (n1,n2){
//             if (n1 !== n2) {
//            return  (n1 + n2)
//                 } else 
//                 return (3 * (n1 + n2)) 
// }

// const result = crazySum(4, 3)
// console.log('Il risultato è: ',result)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const crazyDiff = function (n1){
//     const result = n1-19
//     if (n1>19){
//         return  (3*(n1-19))
       
//         }
//         else return result
// }

// const result = crazyDiff (7)
// console.log('Il risultato è: ',result)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const boundary = function (n){

//         if (n > 20 && n <= 100 || n === 400){
//         return 'TRUE'
//     } else 
//          return 'FALSE'
// }

// const result = boundary (1)
// console.log('Il numero è: ',result)


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const epify = function (str){
//     if (str.startsWith("EPICODE")) {
//         return str;
//     } else {
//         return "EPICODE " + str;
//     }
// }

// const quote = epify ('HA I MIGLIORI STUDENTI')
// console.log(quote)


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const check3and7 = function (n){
//     return n > 0 ? (n % 3 === 0 || n % 7 === 0) : "Numero negativo";
// }

// console.log(check3and7 (5))
// console.log(check3and7 (-2))
// console.log(check3and7 (21))


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const reverseString = function (str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('Niccolò'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const cutString = function (str){
//     return  str.slice(1, -1)
// }

// console.log(cutString('Niccolò'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const giveMeRandom = function (n){
//     const randomNumber = []
//      for (let i = 0; i < 10; i++) {
//       randomNumber.push(Math.ceil(Math.random() *10))
//     }
     

//     return randomNumber
// }

// console.log(giveMeRandom(1))