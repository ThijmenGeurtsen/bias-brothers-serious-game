let input = sessionStorage.getItem('name');

document.getElementById("welcome-text").innerHTML = "Welkom " +
    input + ", bij de Serious Game!";

document.getElementById("welcome-button").addEventListener("click", startGame);

// Button that brings you to the game page & alerts you welcome
function startGame() {
    window.open("canvas.html", '_top');
}