const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");
const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord" : document.getElementById("knopNoord"),
    "west" : document.getElementById("knopWest"),
    "oost" : document.getElementById("knopOost"),
    "zuid" : document.getElementById("knopZuid")
}

directionButtons.noord.style.visibility = "hidden";
directionButtons.west.style.visibility = "hidden";
directionButtons.oost.style.visibility = "hidden";

let current_index = 0;

let locaties = [
    {
        "titel" : "Plaats 0",
        "image" : "img/0.jpg",
        "directions" : {
            "zuid" : 1
        }
    },
    {
        "titel" : "Plaats 1",
        "image" : "img/1.jpg",
        "directions" : {
            "west" : 2,
            "oost" : 5,
            "zuid" : 4,
            "noord" : 0
        }
    },
    {
        "titel" : "Plaats 2",
        "image" : "img/2.jpg",
        "directions" : {
            "oost" : 1,
            "zuid" : 3
        }
    },
    {
        "titel" : "Plaats 3",
        "image" : "img/3.jpg",
        "directions" : {
            "noord" : 2
        }
    },
    {
        "titel" : "Plaats 4",
        "image" : "img/4.jpg",
        "directions" : {
            "noord" : 1
        }
    },
    {
        "titel" : "Plaats 5",
        "image" : "img/5.jpg",
        "directions" : {
            "west" : 1,
            "oost" : 6,
            "noord" : 10
        }
    },
    {
        "titel" : "Plaats 6",
        "image" : "img/6.jpg",
        "directions" : {
            "west" : 5,
            "oost" : 7,
            "zuid" : 11
        }
    },
    {
        "titel" : "Plaats 7",
        "image" : "img/7.jpg",
        "directions" : {
            "west" : 6,
            "noord" : 9,
            "zuid" : 8
        }
    },
    {
        "titel" : "Plaats 8",
        "image" : "img/8.jpg",
        "directions" : {
            "noord" : 7
        }
    },
    {
        "titel" : "Plaats 9",
        "image" : "img/9.jpg",
        "directions" : {
            "west" : 10,
            "zuid" : 7
        }
    },
    {
        "titel" : "Plaats 10",
        "image" : "img/10.jpg",
        "directions" : {
            "oost" : 9,
            "zuid" : 5
        }
    },
    {
        "titel" : "Plaats 11",
        "image" : "img/11.jpg",
        "directions" : {
            "noord" : 6
        }
    }
]

function show(index) {
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;

    updateDirections()
}

function updateDirections() {
    let possible = locaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys) {
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys) {
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput() {
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting) {
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index);
}