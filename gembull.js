function putarMusik() {
    const lagu = document.getElementById("lagu");
    const logo = document.getElementById("logoMusik");

    if (lagu.paused) {
        lagu.play();
        logo.classList.add("muter");
    } else {
        lagu.pause();
        logo.classList.remove("muter");
    }
};


let klik =
  document.getElementById("klik");
let utama =
  document.getElementById("utama");
let gombal =
  document.getElementById("gombal");
let isigombal =
  document.getElementById("isigombal");
let next =
  document.getElementById("next");
let kenal =
  document.getElementById("kenal");
let tauu =
  document.getElementById("tauu");
let isikenal =
  document.getElementById("isikenal");
let nextt =
  document.getElementById("nextt");
let gombal3 =
  document.getElementById("gombal3");
let apaa =
  document.getElementById("apaa");
let isigombal3 =
  document.getElementById("isigombal3");
let nexttt =
  document.getElementById("nexttt");
let gombal4 =
  document.getElementById("gombal4");
let siapa =
  document.getElementById("siapa");
let isigombal4 =
  document.getElementById("isigombal4");
let nextttt =
  document.getElementById("nextttt");
let gombal5 =
  document.getElementById("gombal5");
let knp =
  document.getElementById("knp");
let isigombal5 =
  document.getElementById("isigombal5");
let last =
  document.getElementById("last");
let penutup =
  document.getElementById("penutup");




klik.addEventListener("click", function(event) {
  event.preventDefault();

  gombal.style.display= "block";
  utama.style.display= "none";
});

gombal.addEventListener("click", function(event) {
  event.preventDefault();

  isigombal.style.display= "flex";
  utama.style.display= "none";
}); 

next.addEventListener("click", function (event) {
  event.preventDefault();

  kenal.style.display= "block";
  isigombal.style.display= "none";
  gombal.style.display= "none";
});

tauu.addEventListener("click", function(event) {
  event.preventDefault();

  isikenal.style.display= "block";
  kenal.style.display= "none";
  isigombal.style.display= "none";
  gombal.style.display= "none";
});

nextt.addEventListener("click", function(event) {
  event.preventDefault();

  gombal3.style.display= "block";
  isikenal.style.display= "none";
});

apaa.addEventListener("click", function(event) {

  isigombal3.style.display= "block"
  gombal3.style.display= "none"
});

nexttt.addEventListener("click", function(event) {
  event.preventDefault();

  gombal4.style.display= "block";
  isigombal3.style.display= "none";
});

siapa.addEventListener("click", function(event) {
  event.preventDefault();

  isigombal4.style.display= "block";
  gombal4.style.display= "none";
});

nextttt.addEventListener("click", function(event) {
  event.preventDefault();

  gombal5.style.display= "block";
  isigombal4.style.display= "none";
});

knp.addEventListener("click", function(event) {
  event.preventDefault();

  isigombal5.style.display= "block";
  gombal5.style.display= "none";
});

last.addEventListener("click", function(event) {
  event.preventDefault();

  penutup.style.display = "block";
  isigombal5.style.display = "none";

  ketik();
});

const teks = document.getElementById("teks");
const tulisan = " lu udaa dibagian terakhir website yg gua buat udaa ya sill jgn senyum senyum lagi kwkwk. sorry ini terasa agak singkat dan simpel jujur gua mau buat lebih banyak lagi ttpi kepala gua udaa sangat pusyinggg. maap ye sill sekiranyaa gombalan yg gua buat terasa garing eheheh jujur gua gabisa seromantis orang orang ";

let index = 0;

function ketik() {
  if (index < tulisan.length) {
    teks.textContent += tulisan[index];
    index++;

    setTimeout(ketik, 100);
  }
}