#include <stdio.h>

// Fungsi untuk menghitung derajat keanggotaan fuzzy
// rumus fuzzy
float fuzzyMember(float value, float a, float b) {
    // if (value <= a) return 0.0; // batas bawah anggota
    // if (value >= b) return 1.0; // batas atas anggota
    // return (value - a) / (b - a); // menghitung nilai linear keanggotaan
    return (value <= a) ? 0.0 : (value >= b) ? 1.0 : (value - a) / (b - a);
}

// fungsi AC mode auto
// Operasi utama
float autoMode(float level) {
    float low = fuzzyMember(level, 0, 20); // batas rentang anggota
    float medium = fuzzyMember(level, 18, 28);
    float high = fuzzyMember(level, 26, 45);

    printf("Suhu Ruangan: %.2f\n", level);
    printf("Derajat keanggotaan (Low): %.2f\n", low);
    printf("Derajat keanggotaan (Medium): %.2f\n", medium);
    printf("Derajat keanggotaan (High): %.2f\n", high);

    // if (high > 0.5) {
    //     printf("Status AC: Suhu AC diatur ke 18 derajat Celcius\n");
    // } else if (medium > 0.5) {
    //     printf("Status AC: Suhu AC diatur ke 23 derajat celcius\n");
    // } else {
    //     printf("Status AC: AC dalam posisi menutup\n");
    // }

    const char* statusAc =  (high > 0.5) ? "Status AC: Suhu AC diatur ke 18 derajat Celcius\n" : (medium > 0.5) ? "Status AC: Suhu AC diatur ke 23 derajat celcius\n" : "Status AC: AC dalam posisi menutup\n";
    printf("%s\n", statusAc);
}

int main() {
    float suhuRuang;

    printf("Masukkan suhu ruangan (0-45): ");
    scanf("%f", &suhuRuang);

    autoMode(suhuRuang);
    
    return 0;
}