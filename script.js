const words = [
  "abang",
  "acara",
  "adik",
  "agak",
  "agama",
  "akhir",
  "alamat",
  "ambil",
  "anak",
  "angin",
  "antar",
  "api",
  "april",
  "arah",
  "atas",
  "ayah",
  "baca",
  "badan",
  "bagian",
  "bahagia",
  "bahasa",
  "baju",
  "banyak",
  "baru",
  "basah",
  "batu",
  "bawah",
  "bekerja",
  "belajar",
  "belum",
  "benar",
  "besar",
  "bulan",
  "bunga",
  "burung",
  "cari",
  "cepat",
  "cerita",
  "cinta",
  "daftar",
  "dalam",
  "datang",
  "dengan",
  "desember",
  "dewasa",
  "di atas",
  "dia",
  "duit",
  "duka",
  "dunia",
  "gambar",
  "ganteng",
  "garam",
  "gempa",
  "gerak",
  "guna",
  "guru",
  "halo",
  "harga",
  "hewan",
  "hitam",
  "hujan",
  "ikan",
  "ikut",
  "ilmu",
  "ingin",
  "ini",
  "itu",
  "jalan",
  "jangan",
  "jarak",
  "jari",
  "jasa",
  "jauh",
  "jendela",
  "jika",
  "juga",
  "juli",
  "jumat",
  "juta",
  "kabar",
  "kaki",
  "kamar",
  "kamu",
  "kata",
  "kawan",
  "kecil",
  "kepala",
  "kerja",
  "kertas",
  "ketika",
  "kita",
  "kopi",
  "kuat",
  "kulit",
  "kunci",
  "laki-laki",
  "lampu",
  "laut",
  "lebih",
  "lembur",
  "lewat",
  "lihat",
  "lingkungan",
  "madu",
  "makan",
  "malam",
  "mama",
  "manis",
  "mata",
  "meja",
  "membaca",
  "membantu",
  "menang",
  "mendengar",
  "mengapa",
  "merah",
  "minggu",
  "minum",
  "motor",
  "mulai",
  "musim",
  "nama",
  "nasi",
  "nilai",
  "nomor",
  "nyanyi",
  "oktober",
  "orang",
  "pada",
  "pagi",
  "paman",
  "pantai",
  "pasar",
  "pemain",
  "pencil",
  "pendek",
  "pengertian",
  "penulis",
  "perempuan",
  "pergi",
  "pulang",
  "pulau",
  "pulpen",
  "pusing",
  "putih",
  "raja",
  "rambut",
  "rasa",
  "rumah",
  "sabtu",
  "sakit",
  "salju",
  "sampai",
  "sangat",
  "sapi",
  "saya",
  "sedih",
  "sejak",
  "sekali",
  "sekarang",
  "selamat",
  "selesai",
  "sepi",
  "sepuluh",
  "seputar",
  "sering",
  "sesuatu",
  "siang",
  "sore",
  "suami",
  "sudah",
  "tadi",
  "tamu",
  "tangan",
  "tanya",
  "tari",
  "tahun",
  "tahu",
  "takut",
  "teman",
  "terima",
  "tersenyum",
  "terus",
  "tidak",
  "tikus",
  "timur",
  "tinggi",
  "tua",
  "uang",
  "usia",
  "waktu",
  "wanita",
  "warna",
  "yakin",
  "ya",
  "tahun",
  "saudara",
  "sepupu",
  "cucu",
  "bibi",
  "paman",
];

let scrambledWord = "";
let currentWord = "";
let shuffledArray = "";

function generateScrambledWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  shuffledArray = currentWord.split("").sort(() => Math.random() - 0.5);
  scrambledWord = shuffledArray.join("");
  document.getElementById("scrambled-word").textContent = scrambledWord;
}

function showFeedback(message, isCorrect) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;

  if (isCorrect) {
    messageElement.classList.add("correct");
    messageElement.classList.remove("incorrect");
  } else {
    messageElement.classList.add("incorrect");
    messageElement.classList.remove("correct");
  }

  setTimeout(() => {
    messageElement.textContent = "";
  }, 1500);
}

function changeWord() {
  generateScrambledWord();
  document.getElementById("user-input").value = "";
  document.getElementById("message").textContent = "";
}

function checkGuess() {
  const userGuess = document.getElementById("user-input").value.toLowerCase();
  if (userGuess === currentWord) {
    showFeedback("Benar!", true);
    changeWord();
  } else {
    showFeedback("Coba lagi.", false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generateScrambledWord();

  document.getElementById("check-button").addEventListener("click", checkGuess);
  document
    .getElementById("change-word-button")
    .addEventListener("click", changeWord);
});

function checkGuess() {
  const userGuess = document.getElementById("user-input").value.toLowerCase();
  if (userGuess === currentWord) {
    showFeedback("Hore tebakan anda benar!", true);
    generateScrambledWord();
    document.getElementById("user-input").value = "";
  } else {
    showFeedback("Tebakan anda salah, coba lagi!.", false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generateScrambledWord();

  document.getElementById("check-button").addEventListener("click", checkGuess);
});
