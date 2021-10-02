// Als je op volgende drukt veranderd de button in antwoorden inleveren
function buttonNextClick(){
    console.log('Button clicked');
    document.getElementById('next').textContent = 'Antwoorden inleveren';
}

function buttonLoginClick(){
    const name = document.querySelector('#name');
    alert('Welkom ' + name.value);
    window.open('canvas.html', '_top')
}

function buttonLogoutClick(){
    alert('Tot ziens ');
    window.open('indexLogin.html', '_top')
}