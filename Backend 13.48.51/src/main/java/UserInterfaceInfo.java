package main.java;

import main.java.Canvas.Infections;
import main.java.Canvas.NewsArticleCollection;

public class UserInterfaceInfo {
    private Infections infections;
    private NewsArticleCollection newsArticleCollection;
    private int points;

    public UserInterfaceInfo(Infections infections, NewsArticleCollection newsArticleCollection, int points){
        this.infections = infections;
        this.newsArticleCollection = newsArticleCollection;
        this.points = points;
    }

    public Infections getInfections() {
        return infections;
    }

    public void setInfections(Infections infections) {
        this.infections = infections;
    }

    public NewsArticleCollection getNewsArticleCollection() {
        return newsArticleCollection;
    }

    public void setNewsArticleCollection(NewsArticleCollection newsArticleCollection) {
        this.newsArticleCollection = newsArticleCollection;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
