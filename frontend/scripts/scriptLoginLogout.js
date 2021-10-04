function buttonLogoutClick() {
    alert('Tot ziens ');
    window.open('indexLogin.html', '_top')
}

function buttonLoginClick() {
    const name = document.querySelector('#name');
    alert('Welkom ' + name.value);
    window.open('canvas.html', '_top')
}