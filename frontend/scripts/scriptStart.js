let input = sessionStorage.getItem('name');
sessionStorage.setItem("round", 1);
sessionStorage.setItem("endpointName", "round" + sessionStorage.getItem("round").toString());
sessionStorage.setItem("canvasNumber", 2);
sessionStorage.setItem("timerValue", 7);
document.getElementById("welcome-text").innerHTML = "Welkom " +
    input + ", bij de Serious Game!";

document.getElementById("welcome-button").addEventListener("click", startGame);

// Button that brings you to the game page & alerts you welcome
function startGame() {
    window.open("canvas.html", '_top');
}