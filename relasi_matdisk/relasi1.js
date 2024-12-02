// Mendefinisikan himpunan r dan s
const x = [2, 4, 6, 7];
const s = [3, 4, 5, 6, 7, 9];

// Array untuk menyimpan hasil
const r1 = [];

// Memeriksa elemen dalam r
for (let i of x) {
    if (s.includes(i + 2)) {
        console.log(`(${i}, ${i + 2}) = ${i + 2}`);
        r1.push([i, i + 2]);
    }
}

console.log(`R = ${JSON.stringify(r1)}`);