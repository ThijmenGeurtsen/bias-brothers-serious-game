// Gets all the biases from the backend with an http request. Backend started with intelliJ.
function fetchBiases() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:5000/biases', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const output = JSON.parse(this.responseText);
            makeTable(output, document.getElementById("all-bias-div"));
        } else {
            if (this.status === 500) {
                console.log("500 status");
                fetchBiases();
            }
        }
    }
    xhr.send();
}

function fetchRound() {
    //http://seriousgame-env.eba-rqt9ruwy.eu-west-2.elasticbeanstalk.com/
    //http://localhost:5000/
    let xhr = new XMLHttpRequest();
    let endpointName = sessionStorage.getItem("endpointName");
    console.log(endpointName);
    xhr.open('GET', 'http://localhost:5000/' + endpointName, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const output = JSON.parse(this.responseText);
            loadGame(output)
        } else {
            if (this.status === 500) {
                console.log("500 status");
                fetchRound();
            }
        }
    }
    xhr.send();
}

function fetchMeasure(round, canvasNumber, measureAnswer) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:5000/' + "measure/" + round + "/" + canvasNumber + "/" + measureAnswer, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const output = JSON.parse(this.responseText);
            sessionStorage.setItem("canvasNumber", output)
        } else {
            if (this.status === 500) {
                console.log("500 status");
                fetchMeasure(round, canvasNumber, measureAnswer);
            }        }
    }
    xhr.send();
}

// Start first canvas
fetchRound();