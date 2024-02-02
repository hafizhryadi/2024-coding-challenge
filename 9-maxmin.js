// day 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// mencari nilai terkecil dan terbesar

// var min = function(list){
//     let minValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (minValue > list[i]) {
//             minValue = list[i]
//         }
//     }
//     return minValue;
// }

// var max = function(list){
//     let maxValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (maxValue < list[i]) {
//             maxValue = list[i]
//         }
//     }
//     return maxValue;
// }

// const min = (list) => list.sort((a,b) => a - b)[0]
// const max = (list) => list.sort((a,b) => b - a)[0]

// spread operator mengubah array ...
// [1, 2, 3] = 1, 2, 3
const min = (list) => Math.min(...list)
const max = (list) => Math.max(...list)

console.log(min([42, 54, 65, 87, 0]))
console.log(max([42, 54, 65, 87, 0]))