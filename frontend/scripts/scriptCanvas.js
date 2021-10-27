let timerValue;

sessionStorage.setItem("round", 1);
sessionStorage.setItem("endpointName", "round" + sessionStorage.getItem("round").toString());
sessionStorage.setItem("canvasNumber", 2);
sessionStorage.setItem("timerValue", 420000);

function loadGame(output) {
    let canvasNumber = sessionStorage.getItem("canvasNumber");
    let round = sessionStorage.getItem("round");
    loadTitleRound(output.roundNumber, output.roundTitle);
    loadScenario(output.scenario.scenarioTitle, output.scenario.scenarioText)
    loadBias(output.biasCollection[0].biasName, output.biasCollection[1].biasName, output.biasCollection[2].biasName);
    loadMeasure(output.measureQuestionCollection[0].measureAnswer, output.measureQuestionCollection[1].measureAnswer, output.measureQuestionCollection[2].measureAnswer);
    // Dit verschilt voor elke ronde per canvas (in data)
    loadInfections(output.canvasCollection[canvasNumber].infections.healthy, output.canvasCollection[canvasNumber].infections.infected, output.canvasCollection[canvasNumber].infections.mutated);
    document.getElementById("all-bias-div").innerHTML = "";
    document.getElementById("bias-table-div").innerHTML = "";
    fetchBiases();
    loadBiasModals(output.biasCollection);
    //timerValue = output.timer.minutes;
    loadRoundWarningModals();
    timerValue = parseInt(sessionStorage.getItem("timerValue"));
    // Newsfeed goes in a loop to get ALL articles needed for the canvas (can be 2 or 3)
    for (let i = 0; i < output.canvasCollection[canvasNumber].newsArticleCollection.length; i++) {
        loadNewsfeed(i, output.canvasCollection[canvasNumber].newsArticleCollection[i].newsArticleTitle, output.canvasCollection[canvasNumber].newsArticleCollection[i].newsArticleMessage, output.canvasCollection[canvasNumber].newsArticleCollection[i].newsArticleSource, output.canvasCollection[canvasNumber].newsArticleCollection[i].newsArticlePopup);
    }

    let canvasNumberCorrection = parseInt(canvasNumber) + 1
    //Will change the map for the next round
    document.getElementById("map-img").src = "images/tempMap/R" + round + "C" + canvasNumberCorrection + ".png";
    popupNewsfeed(output.canvasCollection[canvasNumber].newsArticleCollection);
    // Will make the BIAS question default showable
    document.getElementById("qBiasId").click();
}

// THESE ITEMS SHOW ALL THE SAME FOR EVERY CANVAS
// Changes the title to what is send into the function
function loadTitleRound(round, title) {
    document.getElementById("title-round").innerHTML = round + title;
}

// Changes the scenario & text
function loadScenario(scenarioTitle, scenarioText) {
    document.getElementById("scenario-title").innerHTML = scenarioTitle;
    document.getElementById("scenario-text").innerHTML = scenarioText;
}

// Changes the measurements in the question tab
function loadMeasure(answerA, answerB, answerC) {
    document.getElementById("measureA").nextElementSibling.innerHTML = answerA;
    document.getElementById("measureB").nextElementSibling.innerHTML = answerB;
    document.getElementById("measureC").nextElementSibling.innerHTML = answerC;
}

// Changes the biases in the question tab
function loadBias(answerA, answerB, answerC) {
    document.getElementById("biasA").nextElementSibling.innerHTML = answerA;
    document.getElementById("biasB").nextElementSibling.innerHTML = answerB;
    document.getElementById("biasC").nextElementSibling.innerHTML = answerC;
}

// THESE ITEMS CHANGE PER ROUND PER CANVAS
// Changes the infections numbers
function loadInfections(healthy, infected, mutated) {
    document.getElementById("healthy-population").innerHTML = healthy;
    document.getElementById("infected-population").innerHTML = infected;
    document.getElementById("mutated-population").innerHTML = mutated;
}

// Button that brings you to the login page & alerts you goodbye
function buttonLogoutClick() {
    alert('Tot ziens ');
    window.open('index.html', '_top')
}