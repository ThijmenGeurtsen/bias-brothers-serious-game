package main.java.Utils;

import com.google.gson.Gson;
import jdk.nashorn.internal.parser.JSONParser;
import main.java.Canvas.Bias;
import main.java.Canvas.BiasCollection;
import main.java.Canvas.NewsArticleCollection;

import javax.xml.bind.SchemaOutputResolver;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

public class DataHandler {

    private ArrayList<Bias> biasCollection = new ArrayList<Bias>();




    public DataHandler() throws FileNotFoundException {
        setupData();
    }

    private void setupData() throws FileNotFoundException {

//        try {
//            Gson gson = new Gson();
//            Reader reader = Files.newBufferedReader(Paths.get("/home/yawgmoth/Dropbox/HU-ADSD/S2/Periode 3/SeriousGameBackend/TestBias.json"));
//
//            Map<?, ?> map = gson.fromJson(reader, Map.class);
//
//            for (Map.Entry<?, ?> entry : map.entrySet()) {
//                System.out.println(entry.getKey() + "=" + entry.getValue());
//            }
//
//            reader.close();
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }

            Bias bias1 = new Bias("", "hichem", "bla bla bla", "bla bla bla", "100");
            Bias bias2 = new Bias("", "amanda", "bla bla bla", "bla bla bla", "100");
            Bias bias3 = new Bias("", "thijmen", "bla bla bla", "bla bla bla", "100");
            Bias bias4 = new Bias("", "cas", "bla bla bla", "bla bla bla", "100");
            Bias bias5 = new Bias("", "hichem", "bla bla bla", "bla bla bla", "100");

        BiasCollection biasCollection = new BiasCollection();

        biasCollection.addBias(bias1);
        biasCollection.addBias(bias2);
        biasCollection.addBias(bias3);
        biasCollection.addBias(bias4);
        biasCollection.addBias(bias5);




            try {
                Writer writer = new FileWriter("/home/yawgmoth/Dropbox/HU-ADSD/S2/Periode 3/SeriousGameBackend/TestBias.json");
                Gson gson = new Gson();
                // 1. Java object to JSON file
                gson.toJson(biasCollection, writer);
                writer.flush(); //flush data to file

                System.out.println("profile list has exported to json");//   <---
            } catch (Exception e) {
                e.printStackTrace();
            }
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

