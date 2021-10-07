let round = 1;
let jsonName = "data/R" + round.toString();
let jsonFile = jsonName + ".json";
let canvasNumber = 2;

async function json(jsonFile) {
    const response = await fetch(jsonFile);
    const data = await response.json();
    console.log(jsonFile);
    // Dit is voor elke ronde hetzelfde per canvas (in data)
    loadTitleRound(data.titleRound.roundNumber, data.titleRound.title);
    countdown(data.timer);
    loadScenario(data.scenario.scenarioTitle, data.scenario.scenarioText);
    loadBias(data.bias[0].biasName, data.bias[1].biasName, data.bias[2].biasName);
    loadMeasure(data.measureOption[0].answer, data.measureOption[1].answer, data.measureOption[2].answer)
    // Dit verschilt voor elke ronde per canvas (in data)
    loadInfections(data.canvas[canvasNumber].infections.healthy, data.canvas[canvasNumber].infections.infected, data.canvas[canvasNumber].infections.mutated);
    loadMap();
    loadBiasPopup(data.bias);
    // Newsfeed goes in a loop to get ALL articles needed for the canvas (can be 2 or 3)
    for (let i = 0; i < data.canvas[canvasNumber].newsArticles.length; i++) {
        loadNewsfeed(i, data.canvas[canvasNumber].newsArticles[i].newsArticleTitle, data.canvas[canvasNumber].newsArticles[i].newsArticleMessage, data.canvas[canvasNumber].newsArticles[i].newsArticleSource, data.canvas[canvasNumber].newsArticles[i].newsArticlePopup);
    }

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

// Adds eventlistener on question-bias-tab
document.getElementById("qBiasId").addEventListener("click", clickBiasTab);

function clickBiasTab(e) {
    questionContent = document.getElementsByClassName("question-content");
    questionTab(e, "question-bias");
}

// Adds eventlistener on question-measure-tab
document.getElementById("qMeasureId").addEventListener("click", clickMeasureTab);

function clickMeasureTab(e) {
    questionContent = document.getElementsByClassName("question-content");
    questionTab(e, "question-measure");
}

// Creates a tab function to display text of the chosen tab
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
    document.getElementById('question-tab')
}

function loadBiasPopup(bias) {
    // Loop through to get all biasen in the pop up
    for (i = 0; i < bias.length; i++) {
        let biasName = bias[i].biasName;
        let biasDescription = bias[i].biasDescription;
        let biasExample = bias[i].biasExample;
        let biasIndex = i + 1;

        document.getElementById("bias-name-" + biasIndex).innerHTML = biasName;
        document.getElementById("bias-description-" + biasIndex).innerHTML = biasDescription;
        document.getElementById("bias-example-" + biasIndex).innerHTML = biasExample;
    }
    // Get the biasModal
    var biasModal = document.getElementById("biasModal");

    // Get the button that opens the biasModal
    var biasButton = document.getElementById("questionmark-img");

    // Get the <closeModal> element that closeModals the biasModal
    var closeModal = document.getElementsByClassName("closeModal")[0];

    // When the user clicks on the button, open the biasModal
    biasButton.onclick = function () {
        biasModal.style.display = "block";
    }

    // When the user clicks on <closeModal> (x), closeModal the biasModal
    closeModal.onclick = function () {
        biasModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the biasModal, closeModal it
    window.onclick = function (event) {
        if (event.target === biasModal) {
            biasModal.style.display = "none";
        }
    }
}

/* //--Creates old pop-up--\\
function biasPopup(biasName) {
    const popup = document.getElementById(biasName);
    popup.classList.toggle("show");
}
*/

// Code for the timer
let timeoutHandle;

// Changes the timer to the given minutes
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
                //countdown(mins - 1);
                setTimeout(function () {
                    countdown(mins - 1);
                }, 1000);
            }
        }
    }

    tick();
}

// THESE ITEMS CHANGE PER ROUND PER CANVAS
// Changes the infections numbers
function loadInfections(healthy, infected, mutated) {
    document.getElementById("healthy-population").innerHTML = healthy;
    document.getElementById("infected-population").innerHTML = infected;
    document.getElementById("mutated-population").innerHTML = mutated;
}

// Changes the articles max of 3 (CHECK IF WE COULD DO MORE)
function loadNewsfeed(articleNumber, newsTitle, newsMessage, newsSource, boolPopup) {
    articleNumber++;
    document.getElementById("title-" + articleNumber).innerHTML = newsTitle;
    document.getElementById("message-" + articleNumber).innerHTML = newsMessage;
    document.getElementById("source-" + articleNumber).innerHTML = newsSource;
    let popup = boolPopup;
}

// Hopefully load in the new map & animation etc.
function loadMap() {
}

document.getElementById("next").addEventListener
("click", giveAnswer);

function giveAnswer(e) {
    let bias = document.getElementsByName('answer-bias');
    let measure = document.getElementsByName('answer-measure');
    let biasValue;
    let measureValue;

    for (let i = 0; i < bias.length; i++) {
        if (bias[i].checked) {
            biasValue = bias[i].value;
            bias[i].checked = false;
        }
    }

    for (let j = 0; j < measure.length; j++) {
        if (measure[j].checked) {
            measureValue = measure[j].value;
            measure[j].checked = false;
        }
    }

    if (biasValue === undefined || measureValue === undefined) {
        alert("U heeft niet allebei de vragen ingevuld.")
    } else {
        nextRound(biasValue, measureValue);
    }
}

function nextRound(biasAnswer, measureAnswer) {

    round = round + 1;
    let newCanvasNumber = checkAnswer(round, canvasNumber, measureAnswer);
    jsonName = "data/R" + round.toString();
    jsonFile = jsonName + ".json";

    json(jsonFile, newCanvasNumber);
    console.log(biasAnswer);
    console.log(measureAnswer);
    console.log(round);
}

// Start first canvas
json(jsonFile);

