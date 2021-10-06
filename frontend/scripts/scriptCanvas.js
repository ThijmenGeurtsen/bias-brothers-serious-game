let jsonName = "data/R1";
let jsonFile = jsonName + ".json";

async function json(jsonFile) {
    const response = await fetch(jsonFile);
    const data = await response.json();

    // Dit is voor elke ronde hetzelfde per canvas (in data)
    loadTitleRound(data.titleRound.roundNumber, data.titleRound.title);
    countdown(data.timer);
    loadScenario(data.scenario.scenarioTitle, data.scenario.scenarioText);
    // loadBias(data.bias[0].a.biasName, data.bias[1].b.biasName, data.bias[2].c.biasName);
    loadMeasure(data.measureOption[0].answer, data.measureOption[1].answer, data.measureOption[2].answer)
    // Dit verschilt voor elke ronde per canvas (in data)
    loadInfections(data.canvas[2].infections.healthy, data.canvas[2].infections.infected, data.canvas[2].infections.mutated);
    loadMap();
    loadBiasPopup(data.bias);
    // Newsfeed goes in a loop to get ALL articles needed for the canvas (can be 2 or 3)
    for (let i = 0; i < data.canvas[2].newsArticles.length; i++) {
        loadNewsfeed(i, data.canvas[2].newsArticles[i].newsArticleTitle, data.canvas[2].newsArticles[i].newsArticleMessage, data.canvas[2].newsArticles[i].newsArticleSource, data.canvas[2].newsArticles[i].newsArticlePopup);
    }

    // Will make the BIAS question default showable
    document.getElementById("qBiasId").click();
}

// Changes the title to what is send into the function
function loadTitleRound(round, title) {
    document.getElementById("title-round").innerHTML = round + title;
}

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
                countdown(mins - 1);
                setTimeout(function () {
                    countdown(mins - 1);
                }, 1000);
            }
        }
    }

    tick();
}

// Changes the infections numbers
function loadInfections(healthy, infected, mutated) {
    document.getElementById("healthy-population").innerHTML = healthy;
    document.getElementById("infected-population").innerHTML = infected;
    document.getElementById("mutated-population").innerHTML = mutated;
}

// Hopefully load in the new map & animation etc.
function loadMap() {

}

// Changes the articles max of 3 (CHECK IF WE COULD DO MORE)
function loadNewsfeed(articleNumber, newsTitle, newsMessage, newsSource, boolPopup) {
    articleNumber++;
    document.getElementById("title-" + articleNumber).innerHTML = newsTitle;
    document.getElementById("message-" + articleNumber).innerHTML = newsMessage;
    document.getElementById("source-" + articleNumber).innerHTML = newsSource;
    let popup = boolPopup;
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
}

// Creates old pop-up
function biasPopup(biasName) {
    const popup = document.getElementById(biasName);
    popup.classList.toggle("show");
}

document.getElementById("next").addEventListener
    ("click", displayRadioValue);

function displayRadioValue(e) {
    let bias = document.getElementsByName('answer-bias');
    let measure = document.getElementsByName('answer-measure');
    let biasValue;
    let measureValue;


    for (let i = 0; i < bias.length; i++) {
        if (bias[i].checked) {
            //console.log("Gekozen bias: " + bias[i].value);
            biasValue = bias[i].value;
        }
    }

    for (let j = 0; j < measure.length; j++) {
        if (measure[j].checked) {
            //console.log("Gekozen maatregel: " + measure[j].value);
            measureValue = measure[j].value;
        }
    }

    if (biasValue === undefined || measureValue === undefined) {
        alert("U heeft slechts 1 antwoord ingevuld.")
    } else {
        checkAnswers(biasValue, measureValue);
    }
}

function checkAnswers(biasAnswer, measureAnswer) {
    jsonName = "data/R2";
    jsonFile = jsonName + ".json";
    json(jsonFile);
}

// Start first canvas
json(jsonFile);

