// Button that brings you to the login page & alerts you goodbye
function buttonLogoutClick() {
    alert('Tot ziens ');
    window.open('indexLogin.html', '_top')
}

// Button that brings you to the game page & alerts you welcome
function buttonLoginClick() {
    const name = document.querySelector('#name');
    alert('Welkom ' + name.value);
    window.open('canvas.html', '_top')
}