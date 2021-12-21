const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myDate = document.getElementById("myDate");
const myLocation = document.getElementById("myLocation");

let titles = [
    "De schilderijen van Van Gogh",
    "De Rode Wijngaard",
    "De Sterrennacht",
    "Sterrennacht Boven de Rhône",
    "Zonnebloemen",
    "Boerderij in de Provence"
];

let paintings = [
    "img/painting0.jpg", 
    "img/painting1.jpg", 
    "img/painting2.jpg", 
    "img/painting3.jpg", 
    "img/painting4.jpg", 
    "img/painting5.jpg"
];

let dates = [
    "",
    "November 1888",
    "Juni 1889",
    "September 1888",
    "Januari 1889",
    "September 1888"
];

let locations = [
    "",
    "Pesjkinmuseum in Moskau",
    "Museum of Modern Art in New York",
    "Musée d'Orsay in Parijs",
    "Neue Pinakothek in München",
    "National Gallery of Art in Washington D.C."
];

function changeImage(index) {
    myTitle.innerHTML = titles[index];
    myImage.src = paintings[index];
    myDate.innerHTML = dates[index];
    myLocation.innerHTML = locations[index];
}