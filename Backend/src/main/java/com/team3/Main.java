package com.team3;

import com.team3.utils.Endpoints;
import com.team3.utils.DataHandler;

import java.io.FileNotFoundException;


public class Main {

    public static void main(String[] args) {
        try {

            //"http://localhost:4567/"
            DataHandler dataHandler = new DataHandler();
            Endpoints endpoints = new Endpoints(dataHandler);
            endpoints.startServer();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
