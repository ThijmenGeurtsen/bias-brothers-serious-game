// Als je op volgende drukt veranderd de button in antwoorden inleveren
function buttonNextClick(){
    console.log('Button clicked');
    document.getElementById('next').textContent = 'Antwoorden inleveren';
}

function buttonLoginClick(){
var name = document.querySelector('#name');
    alert(name.value);
    document.documentElement.textContent = 'index.html'
}

function buttonLogoutClick(){
    document.documentElement.textContent = 'start.html';

}