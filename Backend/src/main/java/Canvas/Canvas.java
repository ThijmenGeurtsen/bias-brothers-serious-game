package main.java.Canvas;

public class Canvas {

    private int points;
    private NewsArticleCollection newsArticleCollection;
    private Infections infections;

    public Canvas(int points, NewsArticleCollection newsArticleCollection, Infections infections) {
        this.points = points;
        this.newsArticleCollection = newsArticleCollection;
        this.infections = infections;
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

    public Infections getInfections() {
        return infections;
    }

    public void setInfections(Infections infections) {
        this.infections = infections;
    }
}
