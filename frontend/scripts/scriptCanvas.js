let jsonName = "data/R1";
const jsonFile = jsonName + ".json";

async function json(jsonFile) {
    const response = await fetch(jsonFile);
    const data = await response.json();
    loadInfections(data.canvas[2].infections.healthy, data.canvas[2].infections.infected, data.canvas[2].infections.mutated);
    loadMap();

    for (let i = 0; i < data.canvas[2].newsArticles.length; i++) {
        loadNewsfeed(i, data.canvas[2].newsArticles[i].newsArticleTitle, data.canvas[2].newsArticles[i].newsArticleMessage, data.canvas[2].newsArticles[i].newsArticleSource, data.canvas[2].newsArticles[i].newsArticlePopup);
    }

    console.log();
    dataHandler(data);
}

function dataHandler(data) {
    loadTitleRound(data.titleRound.roundNumber, data.titleRound.title);
    countdown(data.timer);
    loadScenario(data.scenario.scenarioTitle, data.scenario.scenarioText);
    loadBias(data);
    loadMeasure(data.measureOption.a.answer, data.measureOption.b.answer, data.measureOption.c.answer)
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
                // countdown(mins-1);
                setTimeout(function () {
                    countdown(mins - 1);
                }, 1000);
            }
        }
    }
    tick();
}


function loadInfections(healthy, infected, mutated) {
    document.getElementById("healthy-population").innerHTML = healthy;
    document.getElementById("infected-population").innerHTML = infected;
    document.getElementById("mutated-population").innerHTML = mutated;
}

function loadMap() {

}

function loadNewsfeed(articleNumber, newsTitle, newsMessage, newsSource, boolPopup) {
    articleNumber++;
    document.getElementById("title-" + articleNumber).innerHTML = newsTitle;
    document.getElementById("message-" + articleNumber).innerHTML = newsMessage;
    document.getElementById("source-" + articleNumber).innerHTML = newsSource;
    let popup = boolPopup;
    console.log(popup);
}

function loadScenario(scenarioTitle, scenarioText) {
    document.getElementById("scenario-title").innerHTML = scenarioTitle;
    document.getElementById("scenario-text").innerHTML = scenarioText;

}

function loadMeasure(answerA, answerB, answerC) {
    document.getElementById("measureA").nextElementSibling.innerHTML = answerA;
    document.getElementById("measureB").nextElementSibling.innerHTML = answerB;
    document.getElementById("measureC").nextElementSibling.innerHTML = answerC;
    //console.log(answerA);
}

function loadBias(data) {

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

// function biasPopup(biasName) {
//     const popup = document.getElementById(biasName);
//     popup.classList.toggle("show");
// }

json(jsonFile);