document.getElementById("login-button").addEventListener("click", buttonLoginClick);

// Button that brings you to the game page & alerts you welcome
function buttonLoginClick() {
    window.open("welcome.html", '_top');
}

const name = document.querySelector('#name');