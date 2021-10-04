function loadCanvas() {
    loadTitleRound();
    loadTimer();
    loadInfections();
    loadMap();
    loadNewsfeed();
    loadScenario();
    loadQuestions();
    loadBias();
    loadToDo();
}

function loadTitleRound() {
    const round = "Ronde 1: ";
    const title = "De start";

    document.getElementById("title-round").innerHTML = round + title;
}

function loadTimer() {
    document.getElementById("timer").innerHTML = "Timer";
}

function loadInfections() {
    const gezondeBevolking = "19362815";
    const besmetteBevolking = "0";
    const gemuteerdeBevolking = "0";

    document.getElementById("gezonde-bevolking").innerHTML = gezondeBevolking;
    document.getElementById("besmette-bevolking").innerHTML = besmetteBevolking;
    document.getElementById("gemuteerde bevolking").innerHTML = gemuteerdeBevolking;
}

function loadMap() {

}

function loadNewsfeed() {

}

function loadScenario() {
    const scenarioTitle = "Hamsterwoede!";
    const scenarioText = "Met oplopende Olifantengriepcijfers op de horizon zijn inwoners van Engelse Eiland massaal begonnen met het inslaan van tampons. Deze zouden helpen de Olifantengriep uit de neus te houden en daarmee een infectie te voorkomen. De regering van Engelse Eiland verzoekt haar burgers dringend om te stoppen met hamsteren, en verzekert hen ervan dat de voorraden groot genoeg zijn om iedereen te kunnen bedienen. Over de effectiviteit van het tampongebruik als preventie van de Olifantengriep zijn door experts nog geen uitspraken gedaan. In Digitanzanië beginnen de eerste geluiden al op te gaan om spullen in te slaan. Wat moet de overheid doen?";

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