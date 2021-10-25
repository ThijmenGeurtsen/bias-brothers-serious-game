//name does not get in yet

document.getElementById("welcome-text").innerHTML = "Welkom " +
    name + ", bij de Serious Game!";

document.getElementById("welcome-button").addEventListener("click", startGame);

// Button that brings you to the game page & alerts you welcome
function startGame() {
    window.open("canvas.html", '_top');
}