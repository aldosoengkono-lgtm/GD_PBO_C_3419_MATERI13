class Media {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Media: " + this.nama);
    }
}

class MediaAudio extends Media {
    putar(menit) {
        console.log(this.nama + " diputar selama " + menit + " menit.");
    }
}

class MediaBaca extends Media {
    baca(halaman) {
        console.log(this.nama + " dibaca sampai halaman " + halaman + ".");
    }
}

class Podcast extends MediaAudio {}

class Ebook extends MediaBaca {}

class LaguMP3 extends MediaAudio {}

function putarSemua(daftar) {
    for (let media of daftar) {
        media.putar(10);
    }
}

function bacaSemua(daftar) {
    for (let media of daftar) {
        media.baca(25);
    }
}

const podcast_3419 = new Podcast("Podcast_3419");
const ebook_3419 = new Ebook("Ebook_3419");
const lagu_3419 = new LaguMP3("Lagu_3419");

podcast_3419.info();
ebook_3419.info();
lagu_3419.info();

putarSemua([podcast_3419, lagu_3419]);
bacaSemua([ebook_3419]);