const kat = {
    naam: "Kiwi",
    leeftijd: 4,
    foto: "kat.jpg",
    geslacht: "vrouw",
};

console.log(kat);

let h1Naam = document.getElementById("naam");
h1Naam.innerHTML = kat.naam;

let pLeeftijd = document.getElementById("leeftijd");
pLeeftijd.innerHTML = kat.leeftijd;

let pGeslacht = document.getElementById("geslacht");
pGeslacht.innerHTML = kat.geslacht;

let imgFoto = document.getElementById("foto");
imgFoto.src = "img/" + kat.foto;