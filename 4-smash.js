// day 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash (words) {
//     return words.join(' ');
// };

// menyatukan kata di dalam array
// cara singkat
const smash = (words) => words.join(' ');

// cara barbar
// function smash (words) {
//     let result = '';
//     for(let i = 0; i < words.length; i++) {
//         result += words[i];
//         if(i != words.length - 1) result += ' ';
        
//     }
//     return result;
// };

 console.log(smash(["this", "is", "a", "really", "long", "sentence"]))