const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");
const myInput = document.getElementById("myInput");

let locaties = [
    {
        "titel" : "Plaats 0",
        "image" : "img/0.jpg"
    },
    {
        "titel" : "Plaats 1",
        "image" : "img/1.jpg"
    },
    {
        "titel" : "Plaats 2",
        "image" : "img/2.jpg"
    },
    {
        "titel" : "Plaats 3",
        "image" : "img/3.jpg"
    },
    {
        "titel" : "Plaats 4",
        "image" : "img/4.jpg"
    },
    {
        "titel" : "Plaats 5",
        "image" : "img/5.jpg"
    },
    {
        "titel" : "Plaats 6",
        "image" : "img/6.jpg"
    },
    {
        "titel" : "Plaats 7",
        "image" : "img/7.jpg"
    },
    {
        "titel" : "Plaats 8",
        "image" : "img/8.jpg"
    },
    {
        "titel" : "Plaats 9",
        "image" : "img/9.jpg"
    },
    {
        "titel" : "Plaats 10",
        "image" : "img/10.jpg"
    },
    {
        "titel" : "Plaats 11",
        "image" : "img/11.jpg"
    }
]

function show(index) {
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
}

function getInput() {
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}