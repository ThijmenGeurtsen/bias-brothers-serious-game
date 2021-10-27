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
    let round = parseInt(sessionStorage.getItem("round"));
    let canvasNumber = parseInt(sessionStorage.getItem("canvasNumber"));
    let newCanvasNumber = checkAnswer(round, canvasNumber, measureAnswer);
    sessionStorage.setItem("round", round + 1);
    sessionStorage.setItem("endpointName", "round" + sessionStorage.getItem("round").toString());
    canvasNumber = newCanvasNumber;
    sessionStorage.setItem("canvasNumber", newCanvasNumber);
    console.log("New round: " + sessionStorage.getItem("round") + " New canvasnumber: " + sessionStorage.getItem("canvasNumber") + " New endpointname: " + sessionStorage.getItem("endpointName"));
    sessionStorage.setItem("timerValue", 420000);
    fetchRound();
}