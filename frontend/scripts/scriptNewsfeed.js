function popupNewsfeed(newsArticleCollection) {
    document.getElementById("newsfeed-modal").style.display = "none";
    for (let i = 0; i < newsArticleCollection.length; i++) {
        if (newsArticleCollection[i].newsArticlePopup === true) {
            document.getElementById("popup-title").innerHTML = newsArticleCollection[i].newsArticleTitle;
            document.getElementById("popup-text").innerHTML = newsArticleCollection[i].newsArticleMessage;
            document.getElementById("popup-paper").innerHTML = newsArticleCollection[i].newsArticleSource;
            break;
        }
    }
}

// Changes the articles max of 3 (CHECK IF WE COULD DO MORE)
function loadNewsfeed(articleNumber, newsTitle, newsMessage, newsSource, boolPopup) {
    articleNumber++;
    document.getElementById("title-" + articleNumber).innerHTML = newsTitle;
    document.getElementById("message-" + articleNumber).innerHTML = newsMessage;
    document.getElementById("source-" + articleNumber).innerHTML = newsSource;
    let popup = boolPopup;
}

window.addEventListener("click", function (event) {
    if (event.target === this.document.getElementById("newsfeed-button")) {
        if (document.getElementById('newsfeed').style.display === "block") {
            document.getElementById('newsfeed').style.display = "none"
        } else {
            document.getElementById('newsfeed').style.display = "block";
        }
    }
    else {
        document.getElementById('newsfeed').style.display = "none";
    }
})