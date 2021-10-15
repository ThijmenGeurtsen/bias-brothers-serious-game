function fetchRound() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4567/round1', true);
    xhr.onload = function () {
        if (this.status == 200) {
            const output = JSON.parse(this.responseText);
            console.log("Gevonden");
        }
    }
    xhr.send();
}