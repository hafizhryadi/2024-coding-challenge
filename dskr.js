function elig(age) {
    if (age >= 18) {
        return "bisa"
    } else {
        return "tidak bisa"
    }
}

const eligs = (age) => (age >= 18 ? 'bisa' : "tidak bisa")

console.log(eligs(20))