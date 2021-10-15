package main.java.Utils;

import com.google.gson.Gson;
import main.java.GameHandler.Round;

import java.io.*;

public class DataHandler {

    private static Round setupRoundaData() throws FileNotFoundException {
        try {
            Gson gson = new Gson();
            Reader reader = new FileReader("/Users/casdewit/Documents/School/Semester2_BiasBrothers/03_Coding/bias-brothers-serious-game/Backend/src/main/test/test.json");


            Round round = gson.fromJson(reader, Round.class);

            reader.close();

            System.out.println("Round has loaded");

            return round;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public Round getRoundaData() throws FileNotFoundException {
        return setupRoundaData();
    }

}


//    public ArrayList<Bias> getBiasCollection() {
//        return biasCollection;
//    }


//    public void load(File file) throws FileNotFoundException {
//        JSONParser parser = new JSONParser();
//        try (FileReader reader = new FileReader(file)) {
//            Object object = parser.parse(reader);
//            JSONArray list = (JSONArray) object;
//            list.forEach(emp -> parseBiasObject((JSONObject) emp));
//        } catch (IOException | ParseException e) {
//            e.printStackTrace();
//        }
//    }
//
//    [20:27] Amanda Schoonhoven
//            File gameJSON = new File("data/game.json");
//            ArrayList<JSONObject> bRound = new ArrayList<JSONObject>();
//        ​[20:29] Amanda Schoonhoven
//private void parseBiasObject(JSONObject biasO) {​
//        JSONObject biasObject = (JSONObject) biasO.get("bias");
//        String Char = (String) biasObject.get("biasChar");
//        String biasName = (String) biasObject.get("biasName");
//        String biasDescription = (String) biasObject.get("biasDescription");
//        String biasExample = (String) biasObject.get("biasExample");
//        String points = (String) (biasObject.get("biasPoints"));
//        eBiasQuestion bias = new eBiasQuestion(Char, biasName, biasDescription, biasExample, points);
//        biasen.add(bias);
//        }​

