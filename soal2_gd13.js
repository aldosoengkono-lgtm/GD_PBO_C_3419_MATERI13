const penyerang = {
    serang() {
        console.log(this.nama + " menyerang musuh.");
    }
};

const penyembuh = {
    sembuhkan() {
        console.log(this.nama + " menyembuhkan rekan.");
    }
};

const pelindung = {
    bertahan() {
        console.log(this.nama + " mengangkat perisai.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    for (let item of kemampuan) {
        Object.assign(Kelas.prototype, item);
    }
}

class Ksatria {
    constructor(nama) {
        this.nama = nama;
    }
}

class Penyihir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(Ksatria, penyerang, pelindung);
applyCapabilities(Penyihir, penyembuh);

const ksatria_3419 = new Ksatria("Ksatria_3419");
const penyihir_3419 = new Penyihir("Penyihir_3419");

ksatria_3419.serang();
ksatria_3419.bertahan();

penyihir_3419.sembuhkan();

console.log("Penyihir_3419 bisa menyerang " + (typeof penyihir_3419.serang === "function"));
console.log("Ksatria_3419 bisa menyembuhkan " + (typeof ksatria_3419.sembuhkan === "function"));