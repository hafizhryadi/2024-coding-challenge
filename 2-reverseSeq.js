// day 2
// dengan looping
// const reverseSeq = (n) => {
//     const result = [];

//     for(let i =n; i >= 1; i--) {
//         result.push(i);
//     }

//     return result;
//   };

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i+1).reverse();

// mengurutkan angka dari terbesar
const reverseSeq = (n) => [...Array(n)].map((el, i) => n-i);

console.log(reverseSeq(5));