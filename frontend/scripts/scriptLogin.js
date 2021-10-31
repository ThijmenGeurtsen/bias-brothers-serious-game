document.getElementById("login-button").addEventListener("click", buttonLoginClick);

// Button that brings you to the game page & alerts you welcome
function buttonLoginClick() {
    let input = document.getElementById("name").value;
    sessionStorage.setItem("name", input);
    window.open("welcome.html", '_top');
}

document.getElementById("form").addEventListener('submit', function (event){
    event.preventDefault();
    buttonLoginClick();
});
