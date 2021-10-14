package main.java.Canvas;

import main.java.Canvas.NewsArticle;

import java.util.ArrayList;

public class NewsArticleCollection {
    private ArrayList<NewsArticle> newsArticleCollection ;

    public NewsArticleCollection(ArrayList<NewsArticle> newsArticleCollection) {
        this.newsArticleCollection = newsArticleCollection;;
    }


    public void add(NewsArticle newsArticle){
        newsArticleCollection.add(newsArticle);
    }
}
