// day 29/366
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// function removeEveryOther(arr){
//     const newArr = []
//     for (let i = 0; i < arr.length; i += 2) {
//         newArr.push(arr[i]);
//     }
//     return newArr
// }

// hanya mengambil element genap
const removeEveryOther = (arr) => arr.filter((el, i) => i % 2 == 0 )
//return arr.filter((el, i) => !(i & 1) )

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))