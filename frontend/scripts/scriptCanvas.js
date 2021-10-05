let jsonName = "data/R1";
const jsonFile = jsonName + ".json";

async function json(jsonFile) {
    const response = await fetch(jsonFile);
    const data = await response.json();
    loadInfections(data.canvas[2].infections.healthy, data.canvas[2].infections.infected, data.canvas[2].infections.mutated);
    loadMap();
    loadNewsfeed1(data.canvas[2].newsArticles[0].newsArticleTitle, data.canvas[2].newsArticles[0].newsArticleMessage, data.canvas[2].newsArticles[0].newsArticleSource, data.canvas[2].newsArticles[0].newsArticlePopup);
    loadNewsfeed2(data.canvas[2].newsArticles[1].newsArticleTitle, data.canvas[2].newsArticles[1].newsArticleMessage, data.canvas[2].newsArticles[1].newsArticleSource, data.canvas[2].newsArticles[1].newsArticlePopup);

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
    document.getElementById("gezonde-bevolking").innerHTML = healthy;
    document.getElementById("besmette-bevolking").innerHTML = infected;
    document.getElementById("gemuteerde bevolking").innerHTML = mutated;
}

function loadMap() {

}

function loadNewsfeed1(newsTitle, newsMessage, newsSource, boolPopup) {
    document.getElementById("canvas1-news-title-1").innerHTML = newsTitle;
    document.getElementById("canvas1-news-text-1").innerHTML = newsMessage;
    document.getElementById("canvas1-news-paper-1").innerHTML = newsSource;
    let popup = boolPopup;
}

function loadNewsfeed2(newsTitle, newsMessage, newsSource, boolPopup) {
    document.getElementById("canvas1-news-title-2").innerHTML = newsTitle;
    document.getElementById("canvas1-news-text-2").innerHTML = newsMessage;
    document.getElementById("canvas1-news-paper-2").innerHTML = newsSource;
    let popup = boolPopup;
}

function loadScenario(scenarioTitle, scenarioText) {
    document.getElementById("scenario-title").innerHTML = scenarioTitle;
    document.getElementById("scenario-text").innerHTML = scenarioText

}

function loadMeasure(answerA, answerB, answerC) {
    document.getElementById("measureA").nextElementSibling.innerHTML = answerA;
    document.getElementById("measureB").nextElementSibling.innerHTML = answerB;
    document.getElementById("measureC").nextElementSibling.innerHTML = answerC;
    console.log(answerA);
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

function biasPopup(biasName) {
    const popup = document.getElementById(biasName);
    popup.classList.toggle("show");
}

json(jsonFile);