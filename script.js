const matrixText = document.getElementById('matrix');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;<>,.?/~';
let currentText = matrixText.innerHTML; // Menyimpan teks asli
let intervalId; // ID interval untuk digunakan saat clearInterval
let letters = Array.from(currentText); // Mengubah teks asli menjadi array dari karakter-karakter individual

function randomizeText() {
  let result = '';
  for (let i = 0; i < letters.length; i++) {
    // Ganti setiap karakter dengan karakter acak
    if (letters[i] !== ' ' && letters[i] !== '<' && letters[i] !== '>' && letters[i] !== '|' && letters[i] !== '!') {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    } else {
      result += letters[i]; // Pertahankan spasi, tag HTML, atau karakter yang tidak perlu diubah
    }
  }
  matrixText.innerHTML = result;
}

function restoreText() {
  matrixText.innerHTML = currentText; // Mengembalikan teks asli
  clearInterval(intervalId); // Hentikan interval setelah mengembalikan teks
}

// Menjalankan animasi acak setiap 50ms selama 5 detik
intervalId = setInterval(randomizeText, 50); // Mengubah teks acak setiap 50ms

setTimeout(restoreText, 16000); // Kembali ke teks asli setelah 5 detik

//
document.addEventListener('DOMContentLoaded', function () {
  var h1 = document.getElementsByTagName('h1')[0],
    text = h1.innerText || h1.textContent,
    split = [],
    i,
    lit = 0,
    timer = null;

  // Memecah teks menjadi span individu untuk setiap huruf
  for (i = 0; i < text.length; ++i) {
    split.push('<span>' + text[i] + '</span>');
  }

  h1.innerHTML = split.join(''); // Ganti konten h1 dengan elemen span

  split = h1.childNodes; // Ambil node anak (span) dari h1

  // Fungsi untuk mengacak dan menambahkan efek kelap-kelip
  var flicker = function () {
    lit += 0.01;
    if (lit >= 1) {
      clearInterval(timer); // Hentikan interval setelah 1 detik
    }
    for (i = 0; i < split.length; ++i) {
      if (Math.random() < lit) {
        split[i].className = 'neon'; // Tambahkan kelas 'neon' untuk efek
      } else {
        split[i].className = ''; // Hapus kelas 'neon' jika tidak acak
      }
    }
  };

  // Menjalankan interval untuk efek kelap-kelip setiap 100ms
  timer = setInterval(flicker, 50);

  // Hentikan animasi setelah 8 detik
  setTimeout(function () {
    clearInterval(timer); // Hentikan interval setelah 8 detik
    // Kembalikan teks ke kondisi semula tanpa efek
    for (i = 0; i < split.length; ++i) {
      split[i].className = ''; // Hapus semua kelas 'neon'
    }
  }, 16000); // Setelah 8 detik, hentikan animasi
});
