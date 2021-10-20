package com.team3;

import com.team3.utils.Endpoints;
import com.team3.utils.DataHandler;


public class Main {

    public static void main(String[] args) {
        
        try {
            
            //"http://localhost:5000/"
            DataHandler dataHandler = new DataHandler();
            Endpoints endpoints = new Endpoints(dataHandler);
            endpoints.startServer();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
