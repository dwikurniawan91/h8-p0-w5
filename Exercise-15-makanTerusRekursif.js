function makanTerusRekursif(waktu) {
  //inisialisasi variabel penghitung dg nilai 0
  var makan = 0;
  if (waktu == 0) {
    //jika waktu habis maka kembalikan nilai 0
    return makan;
  } else if (waktu > 0 && waktu < 16) {
    //jika waktu kurang dari 15 menit return 1
    return 1;
  } else {
    //selain itu setiap makan bertambah kurangi waktu 15 menit
    makan++;
    return makan + makanTerusRekursif(waktu - 15);
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
