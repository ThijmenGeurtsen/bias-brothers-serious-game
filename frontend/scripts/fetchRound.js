let round = 1;
let jsonName = "data/R" + round.toString();
let jsonFile = jsonName + ".json";
let canvasNumber = 2;

function fetchBiases(output) {
    console.log(output.biasCollection[0].biasDescription)
    loadBias(output.biasCollection[0].biasName, output.biasCollection[1].biasName, output.biasCollection[2].biasName);
}

function loadBias(answerA, answerB, answerC) {
    document.getElementById("biasA").nextElementSibling.innerHTML = answerA;
    document.getElementById("biasB").nextElementSibling.innerHTML = answerB;
    document.getElementById("biasC").nextElementSibling.innerHTML = answerC;
}



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
        if (i % 2 == 0) {
            row.style.backgroundColor = 'rgba(128, 128, 128, 0.212)';
        }
    }
}

function fetchRound() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4567/round1', true);
    xhr.onload = function () {
        if (this.status == 200) {
            const output = JSON.parse(this.responseText);
            fetchBiases(output)
        } else {
            console.log("Niet gevonden")
        }
    }
    xhr.send();
}

fetchRound();

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
        alert("Vul eerst de bias vraag in.")
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