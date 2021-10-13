package main.java.Utils;

import com.google.gson.Gson;
import main.java.Canvas.Bias;

import java.util.ArrayList;

import static spark.Spark.*;

public class Endpoints {

    private DataHandler dataHandler;

    public Endpoints(DataHandler dataHandler) {
        this.dataHandler = dataHandler;
    }

    public void startServer() {
        final Gson gson = new Gson();
//        ArrayList<Bias> biasCollection = dataHandler.getBiasCollection();

//        get("/bias", (req, res) -> {
//            return gson.toJson(biasCollection);
//        });

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
