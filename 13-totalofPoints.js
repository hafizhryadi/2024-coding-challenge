// day 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// function points(games) {
//     let result = 0
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             result += 3
//         } else if (games[i][0] === games[i][2]) {
//             result += 1
//         }
//     }
//     return result 
// }

const points = (games) => result = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0)

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))