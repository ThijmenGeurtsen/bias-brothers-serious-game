package main.java.Canvas;

public class Canvas {

    private int points;
    private NewsArticleCollection newsArticleCollection;
    private UserInterfaceInfo userInterfaceInfo;

    public Canvas(int points, NewsArticleCollection newsArticleCollection, UserInterfaceInfo userInterfaceInfo) {
        this.points = points;
        this.newsArticleCollection = newsArticleCollection;
        this.userInterfaceInfo = userInterfaceInfo;
    }
}
