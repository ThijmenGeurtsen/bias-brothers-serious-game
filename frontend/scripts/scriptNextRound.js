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
    //console.log("Roundpoints: " + roundPoints);
    let round = parseInt(sessionStorage.getItem("round"));
    let canvasNumber = parseInt(sessionStorage.getItem("canvasNumber"));
    let newCanvasNumber = checkAnswer(round, canvasNumber, measureAnswer);
    round = round + 1;
    sessionStorage.setItem("round", round);
    sessionStorage.setItem("endpointName", "round" + sessionStorage.getItem("round").toString());
    sessionStorage.setItem("canvasNumber", newCanvasNumber);

    let newTotalPoints = parseInt(sessionStorage.getItem("totalPoints")) + roundPoints;
    sessionStorage.setItem("totalPoints", newTotalPoints);
    //console.log("Total points: " + sessionStorage.getItem("totalPoints"));
    sessionStorage.setItem("timerValue", timerValue);
    if (round === 7) {
        window.open("scorePage.html", '_top');
        return;
    }
    clearInterval(x);
    document.getElementById("timer").style.backgroundColor = "rgba(97,206,112,0)";
    document.getElementById("timer").innerHTML = "";
    fetchRound();
}

function countRoundPoints(biasAnswer, measureAnswer) {
    let biasPoints;
    let measurePoints;

    for (let i = 0; i < biasCollection.length; i++) {
        if (biasCollection[i].biasChar === biasAnswer) {
            biasPoints = biasCollection[i].points;
        }
    }

    for (let i = 0; i < measureQuestionCollection.length; i++) {
        if (measureQuestionCollection[i].measureChar === measureAnswer) {
            measurePoints = measureQuestionCollection[i].measurePoints;
        }
    }
    //console.log("Biaspoints: " + biasPoints + "\nMeasurepoints: " + measurePoints + "\nCanvaspoints: " + canvasPoints);
    return biasPoints + measurePoints + canvasPoints;
}
