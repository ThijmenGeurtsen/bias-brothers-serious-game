package main.java.GameHandler;

import main.java.Canvas.Scenario;

public class Round {

    private String roundNumber;
    private String roundTitle;
    private Timer timer;
    private Scenario scenario;

    public Round(String roundNumber, String roundTitle, Timer timer, Scenario scenario) {
        this.roundNumber = roundNumber;
        this.roundTitle = roundTitle;
        this.timer = timer;
        this.scenario = scenario;
    }

}
