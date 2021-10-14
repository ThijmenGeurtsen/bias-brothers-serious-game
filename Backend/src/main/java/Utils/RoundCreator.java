package main.java.Utils;

import com.google.gson.Gson;
import main.java.Canvas.*;
import main.java.GameHandler.MeasureQuestion;
import main.java.GameHandler.MeasureQuestionCollection;
import main.java.GameHandler.Round;
import main.java.GameHandler.Timer;

import java.io.FileWriter;
import java.io.Writer;
import java.util.ArrayList;

public class RoundCreator {

    public static void createRoundJSON() {
        Timer timer = new Timer(7);
        Scenario scenario = new Scenario("Hamsterwoede!", "Met oplopende Olifantengriepcijfers op de horizon zijn inwoners van Engelse Eiland massaal begonnen met het inslaan van tampons. Deze zouden helpen de Olifantengriep uit de neus te houden en daarmee een infectie te voorkomen. De regering van Engelse Eiland verzoekt haar burgers dringend om te stoppen met hamsteren, en verzekert hen ervan dat de voorraden groot genoeg zijn om iedereen te kunnen bedienen. Over de effectiviteit van het tampongebruik als preventie van de Olifantengriep zijn door experts nog geen uitspraken gedaan. In Digitanzanië beginnen de eerste geluiden al op te gaan om spullen in te slaan. Wat moet de overheid doen?");

        Bias bias1 = new Bias('a', "Decoy effect", "In de keuze tussen twee producten zal er een voorkeur optreden voor een van de twee zodra je een er een optie tussen plaatst die (asymmetrisch) dichter bij een van de opties ligt.", "In de bioscoop verkoopt men kleine, medium en grote popcorn voor €2.50, €3,50 en €4,00 respectievelijk.", 0);
        Bias bias2 = new Bias('b', "Decoy effect", "In de keuze tussen twee producten zal er een voorkeur optreden voor een van de twee zodra je een er een optie tussen plaatst die (asymmetrisch) dichter bij een van de opties ligt.", "In de bioscoop verkoopt men kleine, medium en grote popcorn voor €2.50, €3,50 en €4,00 respectievelijk.", 5);
        Bias bias3 = new Bias('c', "Decoy effect", "In de keuze tussen twee producten zal er een voorkeur optreden voor een van de twee zodra je een er een optie tussen plaatst die (asymmetrisch) dichter bij een van de opties ligt.", "In de bioscoop verkoopt men kleine, medium en grote popcorn voor €2.50, €3,50 en €4,00 respectievelijk.", 2);

        ArrayList<Bias> biasArray = new ArrayList<Bias>();
        biasArray.add(bias1);
        biasArray.add(bias2);
        biasArray.add(bias3);

        BiasCollection biasCollection = new BiasCollection( biasArray);

        MeasureQuestion measureQuestion1 = new MeasureQuestion('a', "We plaatsen een overzicht van de informatie over het virus en omschrijven welke soorten middelen infectie kunnen afremmen of tegenhouden.", 5);
        MeasureQuestion measureQuestion2 = new MeasureQuestion('b', "We plaatsen een overzicht van de informatie over het virus en omschrijven welke soorten middelen infectie kunnen afremmen of tegenhouden.", 0);
        MeasureQuestion measureQuestion3 = new MeasureQuestion('c', "We plaatsen een overzicht van de informatie over het virus en omschrijven welke soorten middelen infectie kunnen afremmen of tegenhouden.", 2);

        ArrayList<MeasureQuestion> measureQuestionArray = new ArrayList<MeasureQuestion>();
        measureQuestionArray.add(measureQuestion1);
        measureQuestionArray.add(measureQuestion2);
        measureQuestionArray.add(measureQuestion3);

        MeasureQuestionCollection measureQuestionCollection = new MeasureQuestionCollection();

        Canvas canvas1 = new Canvas();
        NewsArticleCollection newsArticleCollection;




        Round round = new Round("1", "De start", timer, scenario, biasCollection, measureQuestionCollection, ;

        try {
            Writer writer = new FileWriter("/home/yawgmoth/Dropbox/HU-ADSD/S2/Periode 3/bias-brothers-serious-game/Backend/src/main/test/test.json");
            Gson gson = new Gson();
            // 1. Java object to JSON file
            gson.toJson(round, writer);
            writer.flush(); //flush data to file

            System.out.println("profile list has exported to json");//   <---
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
