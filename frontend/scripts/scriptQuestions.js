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