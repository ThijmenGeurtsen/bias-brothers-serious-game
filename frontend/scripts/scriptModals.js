// Loads all modals
function loadRoundWarningModals() {
    let round = sessionStorage.getItem("round");
    openCloseModal(document.getElementById("next"), document.getElementById("warningModal"), 0);
    openCloseModal(document.getElementById("qMeasureId"), document.getElementById("warningModal"), 0);
    openCloseModal(document.getElementById("questionmark-img"), document.getElementById("biasModal"), 5);
    openCloseModal(document.getElementById("allBiasesBtn"), document.getElementById("allBiasesModal"), 3);
    openCloseModal(document.getElementById("informationBtn"), document.getElementById("informationModal"), 2)

    if (parseInt(round) === 4) {
        document.getElementById("informationBtn").style.display = "grid";
        let iframe = document.getElementById("iframe");
        checkCanvas(iframe);
        document.getElementById("information-table").appendChild(iframe);
    } else {
        document.getElementById("informationBtn").style.display = "none";
    }

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

function checkCanvas(iframe){
    let canvasNumer = parseInt(sessionStorage.getItem("canvasNumber")) + 1;
    console.log(canvasNumer);

    switch (canvasNumer) {
        case 1:
            return iframe.src = "https://drive.google.com/file/d/1CWZcrZjt0kWoUQ0YPBc2eRF011kpXj-S/view";
        case 2:
            return iframe.src = "https://drive.google.com/file/d/1xCR3xDrw8yJFzJNKttVE4fTIuKGRfAwq/view";
        case 3:
            return iframe.src = "https://drive.google.com/file/d/1lMN0tctuVwQPsJGJgDOKozMVeVGXafL8/view";
        case 4:
            return iframe.src = "https://drive.google.com/file/d/1IZknPUbU-mxo8i3gF-u_Rk1mC2_7Vhp4/view";
        case 5:
            return iframe.src = "https://drive.google.com/file/d/115sW4vc252NxeVeL3moiKDJaXGAzYd40/view";

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
        fetchRound();
    }
}