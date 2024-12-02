// day 21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// Kode imperatif
// function rentalCarCost(d) { 
//     let diskon = 0
//     if (d >= 7) {
//         diskon = 50
//     }
//     else if (d >= 3) {
//         diskon = 20
//     }
//     return d * 40 - diskon
// }

// Kode deklaratif
const rentalCarCost = (day) => day * 40 - (day >= 7 ? 50 : day >= 3 ? 20 : 0)

//                             hasil
console.log(rentalCarCost(7))