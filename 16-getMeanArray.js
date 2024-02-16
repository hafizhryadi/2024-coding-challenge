// day 16
// https://www.codewars.com/kata/563e320cee5dddcf77000158
// menghitung nilai rata rata dan diulatkan ke bawah

// function getAverage(marks){
//     let total = 0
//     for (let i = 0; i < marks.length; i++) {
//         total += marks[i] 
//     }
//     return Math.floor(total / marks.length)
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr,0) / marks.length)

console.log(getAverage([1,2,3,4,5,]))