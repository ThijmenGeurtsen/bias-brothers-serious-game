let timerValue;
let canvasPoints;
let biasCollection;
let measureQuestionCollection;

function loadGame(output) {
    let canvasNumber = sessionStorage.getItem("canvasNumber");
    let round = sessionStorage.getItem("round");
    biasCollection = output.biasCollection;
    measureQuestionCollection = output.measureQuestionCollection;
    canvasPoints = output.canvasCollection[canvasNumber].points;
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
    let img = "images/tempMap/R" + round + "C" + canvasNumberCorrection + ".png";
    //Will change the map for the next round
    document.getElementById("map-img").src = img;
    popupNewsfeed(output.canvasCollection[canvasNumber].newsArticleCollection);
    // Will make the BIAS question default showable
    document.getElementById("qBiasId").click();
}

function popupNewsfeed(newsArticleCollection) {
    document.getElementById("newsfeed-modal").style.display = "none";
    for (let i = 0; i < newsArticleCollection.length; i++) {
        if (newsArticleCollection[i].newsArticlePopup == true) {
            document.getElementById("popup-title").innerHTML = newsArticleCollection[i].newsArticleTitle;
            document.getElementById("popup-text").innerHTML = newsArticleCollection[i].newsArticleMessage;
            document.getElementById("popup-paper").innerHTML = newsArticleCollection[i].newsArticleSource;
            break;
        }
    }
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

// Checks if the bias question has been filled in. If true, access to the measure question is gained.
function validateBias() {
    if (document.getElementById("biasA").checked || document.getElementById("biasB").checked || document.getElementById("biasC").checked) {
        //console.log("Checked");
        document.getElementById("qMeasureId").onclick = function () {
            document.getElementById("warningModal").style.display = "none";
        }
        return true;
    }
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
    if (!validateBias()) {
        //alert("Vul eerst de bias vraag in.")
        document.getElementById("warning-message").innerHTML = "Vul eerst de biasvraag in.";
        return;
    }
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

// Loads the biases in the questionmark button below
function loadBiasModals(bias) {
    makeTable(bias, document.getElementById('bias-table-div'));
}

// Creates both bias tables in HTML
function makeTable(list, div) {
    let table = document.createElement("table");
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    div.appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Bias naam";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Omschrijving";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Voorbeeld";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    // Looping through all biases that are passed in
    for (let i = 0; i < list.length; i++) {
        let row = document.createElement('tr')
        let rowName = document.createElement('td');
        rowName.innerHTML = list[i].biasName;
        let rowDescription = document.createElement('td');
        rowDescription.innerHTML = list[i].biasDescription;
        let rowExample = document.createElement('td');
        rowExample.innerHTML = list[i].biasExample;

        row.appendChild(rowName);
        row.appendChild(rowDescription);
        row.appendChild(rowExample);
        tbody.appendChild(row);

        // Gives a grey color to a row if the number is uneven
        if (i % 2 === 0) {
            row.style.backgroundColor = 'rgba(128, 128, 128, 0.212)';
        }
    }
}

// Loads all modals
function loadRoundWarningModals() {
    let round = sessionStorage.getItem("round");
    openCloseModal(document.getElementById("next"), document.getElementById("warningModal"), 0);
    openCloseModal(document.getElementById("qMeasureId"), document.getElementById("warningModal"), 1);
    openCloseModal(document.getElementById("allBiasesBtn"), document.getElementById("allBiasesModal"), 2);
    openCloseModal(document.getElementById("questionmark-img"), document.getElementById("biasModal"), 3);

    document.getElementById("scenario-box").style.display = 'none';
    document.getElementById("question-box").style.display = 'none';
    document.getElementById("infection-box").style.display = 'none';

    document.getElementById("round-message").innerHTML = "Welkom in ronde " + round + ".\n Maak je snel klaar voor de start!";
    document.getElementById("roundModal").style.display = "block";


    document.getElementsByClassName("closeModal")[1].onclick = function () {
        clearTimer();
    }
    window.addEventListener("click", function (event) {
        if (event.target === this.document.getElementById("roundModal")) {
            clearTimer();
            this.clearTimeout(a);
        }
    });
    if (round > 1 && document.getElementById("roundModal").style.display === "block") {
        var a = setTimeout(function () {
            clearTimer();
        }, 5000);
    }
}

function clearTimer() {
    clearInterval(x);
    document.getElementById("roundModal").style.display = "none";
    document.getElementById("timer").style.backgroundColor = "rgba(97,206,112,0)";

    document.getElementById("scenario-box").style.display = 'block';
    document.getElementById("question-box").style.display = 'block';
    document.getElementById("infection-box").style.display = 'block';

    document.getElementById("canvas-footer").style.animation = "fadeIn 3s";
    document.getElementById("game-container").style.animation = "fadeIn 3s"
    document.getElementById("scenario-box").style.animation = "fadeIn 2s";
    document.getElementById("question-box").style.animation = "fadeIn 2s";

    document.getElementById("newsfeed-modal").style.display = "block";
    document.getElementsByClassName("closePopup")[0].onclick = function () {
        document.getElementById("newsfeed-modal").style.display = "none";
    }

    window.addEventListener("click", function (event) {
        if (event.target === this.document.getElementById("newsfeed-modal")) {
            document.getElementById("newsfeed-modal").style.display = "none";

        }
    });

    countdown(timerValue);
}

// Function to set up modals so that it can open and close
function openCloseModal(button, modal, index) {
    // Get the <closeModal> element that closeModals the biasModal
    let closeModal = document.getElementsByClassName("closeModal")[index];

    // When the user clicks on the button, open the biasModal
    button.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <closeModal> (x), the modal will close
    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the biasModal, the modal will close
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    })
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

// Checks if both questions have been filled in.
document.getElementById("next").addEventListener
    ("click", giveAnswer);
function giveAnswer(e) {
    let bias = document.getElementsByName('answer-bias');
    let measure = document.getElementsByName('answer-measure');
    let biasValue;
    let measureValue;
    let biasNumber;
    let measureNumber;

    for (let i = 0; i < bias.length; i++) {
        if (bias[i].checked) {
            biasValue = bias[i].value;
            biasNumber = i;
        }
    }

    for (let j = 0; j < measure.length; j++) {
        if (measure[j].checked) {
            measureValue = measure[j].value;
            measureNumber = j;
        }
    }

    if (biasValue === undefined || measureValue === undefined) {
        //alert("U heeft niet allebei de vragen ingevuld.")
        document.getElementById("warning-message").innerHTML = "U heeft niet allebei de vragen ingevuld.";
    } else {
        nextRound(biasValue, measureValue);
        bias[biasNumber].checked = false;
        measure[measureNumber].checked = false;
        document.getElementById("next").onclick = function () {
            document.getElementById("warningModal").style.display = "none";
        }
    }
}

// Checks the answers and loads the correct new round json file.
function nextRound(biasAnswer, measureAnswer) {
    let roundPoints = countRoundPoints(biasAnswer, measureAnswer);
    console.log("Roundpoints: " + roundPoints);
    let round = parseInt(sessionStorage.getItem("round"));
    let canvasNumber = parseInt(sessionStorage.getItem("canvasNumber"));
    let newCanvasNumber = checkAnswer(round, canvasNumber, measureAnswer);
    sessionStorage.setItem("round", round + 1);
    sessionStorage.setItem("endpointName", "round" + sessionStorage.getItem("round").toString());
    canvasNumber = newCanvasNumber;
    sessionStorage.setItem("canvasNumber", newCanvasNumber);
    //console.log("New round: " + sessionStorage.getItem("round") + " New canvasnumber: " + sessionStorage.getItem("canvasNumber") + " New endpointname: " + sessionStorage.getItem("endpointName"));
    sessionStorage.setItem("timerValue", 420000);

    let newTotalPoints = parseInt(sessionStorage.getItem("totalPoints")) + roundPoints;
    sessionStorage.setItem("totalPoints", newTotalPoints);
    console.log("Total points: " + sessionStorage.getItem("totalPoints"));
    fetchRound();
}

function countRoundPoints(biasAnswer, measureAnswer) {
    let biasPoints;
    let measurePoints;

    for (let i = 0; i < biasCollection.length; i++) {
        if (biasCollection[i].biasChar == biasAnswer) {
            biasPoints = biasCollection[i].points;
        }
    }

    for (let i = 0; i < measureQuestionCollection.length; i++) {
        if (measureQuestionCollection[i].measureChar == measureAnswer) {
            measurePoints = measureQuestionCollection[i].measurePoints;
        }
    }
    console.log("Biaspoints: " + biasPoints + "\nMeasurepoints: " + measurePoints + "\nCanvaspoints: " + canvasPoints);
    return biasPoints + measurePoints + canvasPoints;
}

// Gets all the biases from the backend with an http request. Backend started with intelliJ.
function fetchBiases() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://seriousgame-env.eba-rqt9ruwy.eu-west-2.elasticbeanstalk.com/biases', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const output = JSON.parse(this.responseText);
            makeTable(output, document.getElementById("all-bias-div"));
        }
    }
    xhr.send();
}

function fetchRound() {
    let xhr = new XMLHttpRequest();
    let endpointName = sessionStorage.getItem("endpointName");
    xhr.open('GET', 'http://seriousgame-env.eba-rqt9ruwy.eu-west-2.elasticbeanstalk.com/' + endpointName, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const output = JSON.parse(this.responseText);
            loadGame(output)
        } else {
            console.log("Niet gevonden")
        }
    }
    xhr.send();
}

// Start first canvas
fetchRound();

// Button that brings you to the login page & alerts you goodbye
function buttonLogoutClick() {
    alert('Tot ziens ');
    window.open('index.html', '_top')
}

let x;
// Changes the timer to the given minutes
function countdown(milliseconds) {
    // Set the current date and add 8 minutes to it 
    let countDownDate = new Date().getTime() + milliseconds;

    // Update the count down every 1 second
    x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        sessionStorage.setItem("timerValue", distance)
        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        // If the count down is finished, write some text 
        if (distance < 60000) {
            timerRedBlink();
        } else {
            //document.getElementById("timer").style.backgroundColor = "rgba(97, 206, 112, 0.62)";
        }
        if (distance < 1000) {
            clearInterval(x);
            //document.getElementById("timer").style.backgroundColor = "rgba(97, 206, 112, 0.62)";
            alert("De rondetijd is voorbij. Sluit deze melding om verder te gaan.")
            let round = parseInt(sessionStorage.getItem("round"));
            let canvasNumber = parseInt(sessionStorage.getItem("canvasNumber"));
            sessionStorage.setItem("round", round + 1);
            sessionStorage.setItem("endpointName", "round" + sessionStorage.getItem("round").toString());
            if (canvasNumber > 0) {
                canvasNumber = canvasNumber - 1;
                sessionStorage.setItem("canvasNumber", canvasNumber);
            } else {
                canvasNumber = 0;
                sessionStorage.setItem("canvasNumber", canvasNumber);
            }
            sessionStorage.setItem("timerValue", 420000);
            fetchRound();
        }
    }, 1000);
}

window.addEventListener("click", function (event) {
    if (event.target === this.document.getElementById("newsfeed-button")) {
        if (document.getElementById('newsfeed').style.display == "block") {
            document.getElementById('newsfeed').style.display = "none"
        } else {
            document.getElementById('newsfeed').style.display = "block";
        }
    }
    else {
        document.getElementById('newsfeed').style.display = "none";
    }
})

function timerRedBlink() {
    document.getElementById("timer").style.backgroundColor = "red";
    document.getElementById("timer").style.borderRadius = "50%";
    document.getElementById("timer").style.padding = "10px";
    document.getElementById("timer").style.animation = "blink 1000ms infinite";
}
