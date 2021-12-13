const dataFilm = [
    { judul: 'Doctor Strange', durasi: '2 Jam', genre: 'Action', tahun: 2018},
    { judul: 'Iron Man 1', durasi: '2 Jam', genre: 'Action', tahun: 2008},
    { judul: 'End Game', durasi: '3 Jam', genre: 'Action', tahun: 2019 },
    { judul: 'Infinity War', durasi: '2 Jam', genre: 'Action', tahun: 2019},
    { judul: 'Captain Marvel', durasi: '2 Jam', genre: 'Action', tahun: 2018}
  ]

// Mencari Data diatas dengan melakukan filter mana saja film durasi 2 jam dan tahun 2018 dan 2008, Buat Function CariDataFilm terlebih dahulu
function CariDataFilm() {
    // buat variabel baru yang didalamnya terdapat method filter pada array dataFilm
    let newData = dataFilm.filter(function(x){
        // x digunakan sebagai inisialisasi array dataFilm, kemudian kita panggil return nama properti yang ingin kita filter (Durasi 2 jam, Tahun 2018, dan tahun 2008)
        return x.durasi === '2 Jam' && x.tahun === 2018 || x.tahun === 2008

    })
    return newData;
}
console.log(CariDataFilm());
// Data yang kita filter tadi akan tercetak dimana dari array dataFilm durasi 2 jam, tahun 2018, dan tahun 2008