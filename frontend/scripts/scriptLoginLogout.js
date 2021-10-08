// Button that brings you to the login page & alerts you goodbye
function buttonLogoutClick() {
    alert('Tot ziens ');
    window.open('index.html', '_top')
}


document.getElementById("login-button").addEventListener("click", buttonLoginClick);

// Button that brings you to the game page & alerts you welcome
function buttonLoginClick() {
    const name = document.querySelector('#name');
    window.open("canvas.html", '_top');
}