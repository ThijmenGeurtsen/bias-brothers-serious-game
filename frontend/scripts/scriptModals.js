// Loads all modals
function loadRoundWarningModals() {
    let round = sessionStorage.getItem("round");
    openCloseModal(document.getElementById("next"), document.getElementById("warningModal"), 0);
    openCloseModal(document.getElementById("qMeasureId"), document.getElementById("warningModal"), 0);
    openCloseModal(document.getElementById("questionmark-img"), document.getElementById("biasModal"),5);
    openCloseModal(document.getElementById("informationBtn"), document.getElementById("informationModal"), 2)
    openCloseModal(document.getElementById("allBiasesBtn"), document.getElementById("allBiasesModal"), 3);
    loadInformationModal(document.getElementById("information-table"));


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
        console.log(index);
    }

    // When the user clicks anywhere outside of the biasModal, the modal will close
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";

        }
    })
}

// Loads the biases in the questionmark button below
function loadBiasModals(bias) {
    makeTable(bias, document.getElementById('bias-table-div'));
}

// Loads the information for round 4
function loadInformationModal(){
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

function loadTimerModal() {
    document.getElementById("timer").innerHTML = "";
    document.getElementById("timer").style.backgroundColor = "rgba(97,206,112,0)";
    document.getElementById("timer-message").innerHTML = "De rondetijd is voorbij. Sluit deze melding om verder te gaan.";
    document.getElementById("timerModal").style.display = "block";
    document.getElementsByClassName("closePopup")[1].onclick = function () {
        document.getElementById("timerModal").style.display = "none";
        let round = parseInt(sessionStorage.getItem("round"));
            let canvasNumber = parseInt(sessionStorage.getItem("canvasNumber"));
            sessionStorage.setItem("round", round + 1);
            sessionStorage.setItem("endpointName", "round" + sessionStorage.getItem("round").toString());
            let newTotalPoints = parseInt(sessionStorage.getItem("totalPoints")) + canvasPoints;
            sessionStorage.setItem("totalPoints", newTotalPoints);
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
}

function loadInformationModal(div) {
    let table = document.createElement("table");
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    div.appendChild(table);

    // Creating and adding data to first row of the table
    let row_1_information = document.createElement('tr');
    let country = document.createElement('th');
    country.innerHTML = "Land";
    let measure_1 = document.createElement('th');
    measure_1.innerHTML = "Meting 1";
    let measure_2 = document.createElement('th');
    measure_2.innerHTML = "Meting 2";
    let measure_3 = document.createElement('th');
    measure_3.innerHTML = "Meting 3";
    let measure_4 = document.createElement('th');
    measure_4.innerHTML = "Meting 4";
    let measure_5 = document.createElement('th');
    measure_5.innerHTML = "Meting 5";
    let measure_6 = document.createElement('th');
    measure_6.innerHTML = "Meting 6";
    let measure_7 = document.createElement('th');
    measure_7.innerHTML = "Meting 7";
    let measure_8 = document.createElement('th');
    measure_8.innerHTML = "Meting 8";
    let measure_9 = document.createElement('th');
    measure_9.innerHTML = "Meting 9";
    let measure_10 = document.createElement('th');
    measure_10.innerHTML = "Meting 10";
    let measure_11 = document.createElement('th');
    measure_11.innerHTML = "Meting 11";

    row_1_information.appendChild(country);
    row_1_information.appendChild(measure_1);
    row_1_information.appendChild(measure_2);
    row_1_information.appendChild(measure_3);
    row_1_information.appendChild(measure_4);
    row_1_information.appendChild(measure_5);
    row_1_information.appendChild(measure_6);
    row_1_information.appendChild(measure_7);
    row_1_information.appendChild(measure_8);
    row_1_information.appendChild(measure_9);
    row_1_information.appendChild(measure_10);
    row_1_information.appendChild(measure_11);

    thead.appendChild(row_1_information);

    // per land 3 rijen aan informatie met 11 metingen max


/*
    // Looping through all information that is passed in
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
 */
}