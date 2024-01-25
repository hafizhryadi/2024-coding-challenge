// day 3/366

// function hero(bullets, dragons){
//     if(bullets / 2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }


// function hero(bullets, dragons){ 
//     return bullets / 2 >= dragons;
// }

// pahlawan harus melawan naga
// 1 naga = 2 peluru
// true = menang, false = kalah
const hero = (bullets, dragons) => bullets / 2 >= dragons;
// const hero = (bullets, dragons) => bullets >= dragons * 2;


console.log(hero(10, 5))