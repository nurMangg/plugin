function kotak(x) {
    let hasil = '';
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(kotak(5));