function loadCanvas() {
    loadTitleRound("Ronde 1: ", "De start");
    countdown(6);
    loadInfections("19362815", "0", "0");
    loadMap();
    loadNewsfeed();
    loadScenario("Hamsterwoede!", "Met oplopende Olifantengriepcijfers op de horizon zijn inwoners van Engelse Eiland massaal begonnen met het inslaan van tampons. Deze zouden helpen de Olifantengriep uit de neus te houden en daarmee een infectie te voorkomen. De regering van Engelse Eiland verzoekt haar burgers dringend om te stoppen met hamsteren, en verzekert hen ervan dat de voorraden groot genoeg zijn om iedereen te kunnen bedienen. Over de effectiviteit van het tampongebruik als preventie van de Olifantengriep zijn door experts nog geen uitspraken gedaan. In Digitanzanië beginnen de eerste geluiden al op te gaan om spullen in te slaan. Wat moet de overheid doen?");
    loadQuestions();
    loadBias();
    loadToDo();
}

function loadTitleRound(round, title) {
    document.getElementById("title-round").innerHTML = round + title;
}

let timeoutHandle;

function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;

    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML =
            current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {

            if (mins > 1) {

                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function () {
                    countdown(mins - 1);
                }, 1000);

            }
        }
    }

    tick();
}

countdown(2);


function loadInfections(gezond, besmet, gemuteerd) {
    document.getElementById("gezonde-bevolking").innerHTML = gezond;
    document.getElementById("besmette-bevolking").innerHTML = besmet;
    document.getElementById("gemuteerde bevolking").innerHTML = gemuteerd;
}

function loadMap() {

}

function loadNewsfeed() {

}

function loadScenario(scenarioTitle, scenarioText) {
    document.getElementById("scenario-title").innerHTML = scenarioTitle;
    document.getElementById("scenario-text").innerHTML = scenarioText

}

function loadQuestions() {

}

function loadBias() {

}

function loadToDo() {

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

loadCanvas();