// Als je op volgende drukt veranderd de button in antwoorden inleveren
function openWhatToDoTab() {
    console.log('Button clicked');
    document.getElementById('next').textContent = 'Antwoorden inleveren';
}

function buttonLoginClick() {
    const name = document.querySelector('#name');
    alert('Welkom ' + name.value);
    window.open('canvas.html', '_top')
}

function buttonLogoutClick() {
    alert('Tot ziens ');
    window.open('indexLogin.html', '_top')
}

function questionTab(evt, questionName) {
    let i, questionContent, questionTabLink;
    questionContent = document.getElementsByClassName("question-content");
    for (i = 0; i < questionContent.length; i++) {
        questionContent[i].style.display = "none";
    }
    questionTabLink = document.getElementsByClassName("question-tab-link");
    for (i = 0; i < questionTabLink.length; i++) {
        questionTabLink[i].className = questionTabLink[i].className.replace(" active", "");
    }
    document.getElementById(questionName).style.display = "block";
    evt.currentTarget.className += " active";
}

function biasPopup(biasName) {
    const popup = document.getElementById(biasName);
    popup.classList.toggle("show");
}