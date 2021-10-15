package main.java.Utils;

import com.google.gson.Gson;
import main.java.Canvas.Bias;
import main.java.GameHandler.Round;
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
        });

        final Gson gson = new Gson();
        Round round = dataHandler.getRoundaData();

        get("/round1", (req, res) -> {
            return gson.toJson(round);
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
