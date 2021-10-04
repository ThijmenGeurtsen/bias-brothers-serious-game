const jsonFile = "data.json";

async function json() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    loadTitleRound(data.titleRound.roundNumber, data.titleRound.title);
    countdown(data.timer);
    loadInfections(data.infections.gezond, data.infections.besmet, data.infections.gemuteerd);
    loadMap();
    loadNewsfeed1(data.newsArticles[0].newsArticletitle, data.newsArticles[0].newsArticleMessage, data.newsArticles[0].newsArticleSource, data.newsArticles[0].newsArticlePopup);
    loadNewsfeed2(data.newsArticles[1].newsArticletitle, data.newsArticles[1].newsArticleMessage, data.newsArticles[1].newsArticleSource, data.newsArticles[1].newsArticlePopup);
    loadScenario(data.scenario.scenarioTitle, data.scenario.scenarioText);
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

function loadQuestions() {

}

function loadBias(data) {

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

json();