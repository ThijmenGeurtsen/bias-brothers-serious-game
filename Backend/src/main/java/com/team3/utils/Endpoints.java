package com.team3.utils;

import com.google.gson.Gson;
import com.team3.canvas.Bias;
import com.team3.gamehandler.Round;
import spark.Spark;

import java.io.FileNotFoundException;
import java.util.ArrayList;

import static spark.Spark.*;

public class Endpoints {


    private DataHandler dataHandler;


    public Endpoints(DataHandler dataHandler) {
        this.dataHandler = dataHandler;
    }

    public void startServer() throws FileNotFoundException {
        //////////////////////////////////////////
        port(5000); // port amazon for endpoints
        /////////////////////////////////////////

        // Allow CORS//////////////////////////////////////////////////////////////////////////////
        Spark.options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }
            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }
            return "OK";

        });

        Spark.before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");

            get("/", (req, res) -> "Serious Game");
        });
        ////////////////////////////////////////////////////////////////////////////////////////////


        final Gson gson = new Gson();

        ArrayList<Bias> biasList = dataHandler.getBiaslistData();

        System.out.println("Bias list has been loaded");


        get("/round/:number", (req, res) -> {
            int roundNumber = Integer.parseInt(req.params(":number"));
            Round round = dataHandler.getRoundsData().get(roundNumber - 1);

            System.out.println("Round " + roundNumber + " has been loaded");

            return gson.toJson(round);
        });

        get("/biases", (req, res) -> {
            return gson.toJson(biasList);
        });

        after((req, res) -> {
            res.status(200);
            res.type("application/json");
        });

        notFound((req, res) -> {
            res.type("application/json");
            res.status(404);
            return "{\"message\":\"404 Not Found\"}";
        });
    }
}
