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
            //alert("De rondetijd is voorbij. Sluit deze melding om verder te gaan.")
            loadTimerModal();
            
        }
    }, 1000);
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

function timerRedBlink() {
    document.getElementById("timer").style.backgroundColor = "red";
    document.getElementById("timer").style.borderRadius = "50%";
    document.getElementById("timer").style.padding = "10px";
    document.getElementById("timer").style.animation = "blink 1000ms infinite";
}