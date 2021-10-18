package com.team3;

import com.team3.utils.Endpoints;
import com.team3.utils.DataHandler;
import io.javalin.Javalin;

import java.io.FileNotFoundException;


public class Main {

    private static int getHerokuAssignedPort() {
        String herokuPort = System.getenv("PORT");
        if (herokuPort != null) {
            return Integer.parseInt(herokuPort);
        }
        return 7000;
    }

    public static void main(String[] args) throws FileNotFoundException {
        Javalin app = Javalin.create()
                .start(getHerokuAssignedPort())
                .get("/", ctx -> ctx.result("Hello Heroku"));

        //"http://localhost:4567/"
        DataHandler dataHandler = new DataHandler();
        Endpoints endpoints = new Endpoints(dataHandler);

    }
}


