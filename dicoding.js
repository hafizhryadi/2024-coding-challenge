// function findMax(a, b, c) {
//     if (a > b || a > c) {
//         return a;
//     } else if (b > a || b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }

const find = (a, b, c) => a > b || a > c ? a : b > a || b > c ? b : c

console.log(find(2, 3, 2))