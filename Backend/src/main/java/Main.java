package main.java;

import main.java.Utils.BiasListCreator;
import main.java.Utils.DataHandler;
import main.java.Utils.Endpoints;
import main.java.Utils.RoundCreator;
import spark.Spark;

import java.io.FileNotFoundException;


public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        //"http://localhost:4567/"
        DataHandler dataHandler = new DataHandler();
        Endpoints endpoints = new Endpoints(dataHandler);
        endpoints.startServer();
    }
}
