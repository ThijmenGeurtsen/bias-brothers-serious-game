package main.java.Canvas;

import main.java.Canvas.NewsArticle;

import java.util.ArrayList;

public class NewsArticleCollection {
//
//    File newsfeedJSON = new File("data/NewsArticle.json");
//    ArrayList<NewsArticle> newsfeedCollection = new ArrayList<>();
//
//    public void NewsfeedCollection() throws FileNotFoundException {
//        load(newsfeedJSON);
//    }
//
//    public void load(File file) throws FileNotFoundException {
//        JSONParser parser = new JSONParser();
//
//        try (FileReader reader = new FileReader(file)) {
//
//            Object object = parser.parse(reader);
//            JSONArray list = (JSONArray) object;
//            list.forEach(emp -> parseBiasObject((JSONObject) emp));
//
//        } catch (IOException | ParseException e) {
//            e.printStackTrace();
//        }
//    }
//
//    private void parseBiasObject(JSONObject newsfeedO) {
//        JSONObject newsfeedObject = (JSONObject) newsfeedO.get("newsfeed");
//
//        String newsfeedTitle = (String) (newsfeedObject.get("newsfeedTitle"));
//        String newsfeedText = (String) (newsfeedObject.get("newsfeedText"));
//        String newsfeedPaper = (String) (newsfeedObject.get("newsfeedPaper"));
//        boolean popUp = (boolean) (newsfeedObject.get("popUp"));
//
//
//        NewsArticle newsfeed = new NewsArticle(newsfeedTitle, newsfeedText, newsfeedPaper, popUp);
//
//        newsfeedCollection.add(newsfeed);
//    }
//
//    public ArrayList<NewsArticle> getNewsfeedCollection() {
//        return newsfeedCollection;
//    }
}
