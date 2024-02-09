// day 12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// function arrayPlusArray(arr1, arr2) {
//     let total = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         total += arr1[i];
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         total += arr2[i];
//     }
//     return total;
// }

// versi dinamis jika ingin menambah array baru
// function arrayPlusArray(arr1, arr2) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//        for (let j = 0; j < arguments[i].length; j++) {
//         total += arguments[i][j]    
//        }
//     }
//     return total
// }

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0)


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))