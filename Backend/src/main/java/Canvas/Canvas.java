package main.java.Canvas;

public class Canvas {

    private int points;
    private NewsArticleCollection newsArticleCollection;
    private UserInterfaceInfo userInterfaceInfo;

    public Canvas(){

    }

    public Canvas(int points, NewsArticleCollection newsArticleCollection, UserInterfaceInfo userInterfaceInfo) {
        this.points = points;
        this.newsArticleCollection = newsArticleCollection;
        this.userInterfaceInfo = userInterfaceInfo;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public NewsArticleCollection getNewsArticleCollection() {
        return newsArticleCollection;
    }

    public void setNewsArticleCollection(NewsArticleCollection newsArticleCollection) {
        this.newsArticleCollection = newsArticleCollection;
    }

    public UserInterfaceInfo getUserInterfaceInfo() {
        return userInterfaceInfo;
    }

    public void setUserInterfaceInfo(UserInterfaceInfo userInterfaceInfo) {
        this.userInterfaceInfo = userInterfaceInfo;
    }
}
