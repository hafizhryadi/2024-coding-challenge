// Himpunan X dan Y
const himpunanX = [1, 2, 3];
const himpunanY = [2, 3, 4];

// 1. Relasi Refleksif: Setiap elemen dari X atau Y berelasi dengan dirinya sendiri (dalam konteks relasi X ke X dan Y ke Y)
const relasiRefleksif = () => {
    let relasi = [];
    
    // Relasi refleksif untuk X -> X
    himpunanX.forEach(angka => {
        relasi.push([angka, angka]); // Menambahkan relasi (angka, angka)
    });

    // Relasi refleksif untuk Y -> Y
    himpunanY.forEach(angka => {
        relasi.push([angka, angka]); // Menambahkan relasi (angka, angka)
    });

    console.log("Relasi Refleksif:", relasi);
};

// 2. Relasi Simetris: Jika a berelasi dengan b, maka b berelasi dengan a
const relasiSimetris = () => {
    let relasi = [];
    
    // Tentukan relasi (misalnya relasi antara angka X dan Y)
    relasi.push([1, 2], [2, 3], [3, 4], [1, 3], [2, 4]);  // Menambahkan beberapa relasi contoh

    // Tambahkan relasi simetris (b, a) untuk setiap relasi (a, b)
    let simetris = [];
    relasi.forEach(([a, b]) => {
        simetris.push([a, b]);
        simetris.push([b, a]); // Menambahkan relasi balik
    });

    console.log("Relasi Simetris:", simetris);
};


// 3. Relasi Transitif: Jika a berelasi dengan b dan b berelasi dengan c, maka a berelasi dengan c
const relasiTransitif = () => {
    let relasi = [];
    
    // Tentukan relasi (misalnya relasi antara angka X dan Y)
    relasi.push([1, 2], [2, 3], [3, 4], [1, 3], [2, 4]);  // Menambahkan beberapa relasi contoh

    // Tentukan relasi transitif
    let transitif = [];
    for (let i = 0; i < relasi.length; i++) {
        const [a, b] = relasi[i];
        for (let j = 0; j < relasi.length; j++) {
            const [c, d] = relasi[j];
            if (b === c) {
                transitif.push([a, d]); // Menambahkan relasi transitif (a, d)
            }
        }
    }

    console.log("Relasi Transitif:", transitif);
};


// Eksekusi
relasiRefleksif();
relasiSimetris();
relasiTransitif();
