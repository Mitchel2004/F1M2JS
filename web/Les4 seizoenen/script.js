document.body.style.backgroundImage = "linear-gradient(to right, #00C0FF, #00C000, #FFFF00, #804000)";

const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen = [
    {
        "Titel":"Seizoenen",
        "Image":"img/seasons.jpg",
        "Background":"linear-gradient(to right, #00C0FF, #00C000, #FFFF00, #804000)"
    },
    {
        "Titel":"Winter",
        "Image":"img/winter.jpg",
        "Background":"linear-gradient(to right, #00C0FF, #004080)"
    },
    {
        "Titel":"Lente",
        "Image":"img/spring.jpg",
        "Background":"linear-gradient(to right, #00C000, #004000)"
    },
    {
        "Titel":"Zomer",
        "Image":"img/summer.jpg",
        "Background":"linear-gradient(to right, #FFFF00, #808000)"
    },
    {
        "Titel":"Herfst",
        "Image":"img/autumn.jpg",
        "Background":"linear-gradient(to right, #804000, #201000)"
    }
];

function show(index) {
    myTitle.innerHTML = seizoenen[index].Titel;
    myImage.src = seizoenen[index].Image;
    document.body.style.backgroundImage = seizoenen[index].Background;
}