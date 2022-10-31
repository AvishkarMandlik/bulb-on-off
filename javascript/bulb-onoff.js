function bulbOn() {
    document.getElementById("bulb").src = "./images/bulb-on.png";
    document.getElementById("btn-on").className = "btn btn-on";
    document.getElementById("btn-off").className = "btn";
    document.querySelector(".card").className = "card card-light";
}
function bulbOff() {
    document.getElementById("bulb").src = "./images/bulb-off.png";
    document.getElementById("btn-off").className = "btn btn-off";
    document.getElementById("btn-on").className = "btn";
    document.querySelector(".card").className = "card card-dark";
}