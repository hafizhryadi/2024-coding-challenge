// 28/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// function bonusTime(salary, bonus) {
//     return `\u00A3${bonus ? salary * 10 : salary}`
// }

const bonusTime = (salary, bonus) => `\u00A3${bonus ? salary * 10 : salary}`


console.log(bonusTime(10000, true))