var nilaiRaya = 80;
var nilaiGenta = 50;
var teks;

function indeks(a) {
    if (a >= 80){
        teks = 'A';
    }else if(a >= 70 && a < 80){
        as = 'B';
    }else if(a >=60 && a <70){
        teks = 'C';
    }else if(a >= 50 && a < 60){
        teks = 'D';
    }else if(a >= 0 && a < 50) {
        teks = 'E';
    }else{
        teks = "Data Salah!"
    }
    console.log("Indeks Nilai " +a +' adalah ' + teks);
}

indeks(nilaiRaya);
indeks(nilaiGenta);
