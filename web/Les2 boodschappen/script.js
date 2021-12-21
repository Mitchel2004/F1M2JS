const groentevak = document.getElementById("groente");
const fruitvak = document.getElementById("fruit");

function InGroente(groente) {
    const nieuwElement = document.createElement("h3");
    nieuwElement.innerHTML = groente;
    nieuwElement.className = "groentestijl";
    groentevak.appendChild(nieuwElement);
}

function InFruit(fruit) {
    const nieuwElement = document.createElement("h3");
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = "fruitstijl";
    fruitvak.appendChild(nieuwElement);
}