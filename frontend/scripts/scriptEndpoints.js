// Gets all the biases from the backend with an http request. Backend started with intelliJ.
function fetchBiases() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:5000/biases', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const output = JSON.parse(this.responseText);
            makeTable(output, document.getElementById("all-bias-div"));
        }
    }
    xhr.send();
}

function fetchRound() {
    //http://seriousgame-env.eba-rqt9ruwy.eu-west-2.elasticbeanstalk.com/
    //http://localhost:5000/round/
    let xhr = new XMLHttpRequest();
    let endpointName = sessionStorage.getItem("round");
    xhr.open('GET', 'http://localhost:5000/round/' + endpointName, true);
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

function fetchMeasure(round, canvasNumber, measureAnswer) {
    let xhr = new XMLHttpRequest();
    let endpointName = sessionStorage.getItem("endpointName");
    xhr.open('GET', 'http://localhost:5000/' + "measure/" + round + "/" + canvasNumber + "/" + measureAnswer, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const output = JSON.parse(this.responseText);
            return output;
        } else {
            console.log("Niet gevonden")
        }
    }
    xhr.send();
}

// Start first canvas
fetchRound();