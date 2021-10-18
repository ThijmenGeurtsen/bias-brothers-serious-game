package main.java.GameHandler;

import main.java.Canvas.*;

import java.util.ArrayList;

public class Round {
    private String roundNumber;
    private String roundTitle;
    private Timer timer;
    private Scenario scenario;
    private ArrayList<Bias> biasCollection = new ArrayList<Bias>();
    private ArrayList<MeasureQuestion>  measureQuestionCollection;
    private ArrayList<Canvas>  canvasCollection;

    public Round(String roundNumber, String roundTitle, Timer timer, Scenario scenario, ArrayList<Bias> biasCollection, ArrayList<MeasureQuestion> measureQuestionCollection, ArrayList<Canvas> canvasCollection ) {
        this.roundNumber = roundNumber;
        this.roundTitle = roundTitle;
        this.timer = timer;
        this.scenario = scenario;
        this.biasCollection = biasCollection;
        this.measureQuestionCollection = measureQuestionCollection;
        this.canvasCollection = canvasCollection;
    }
}
