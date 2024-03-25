// day 22/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// function removeExclamationMarks(s) {
//     let result = ''
//     for (let i = 0; i < s.length; i++) {
//        if (s[i] !== '!') {
//         result += s[i]
//        } 
//     }
//     return result
// }

const removeExclamationMarks = (s) => s.split('!').join('')


console.log(removeExclamationMarks("Hello World!"))