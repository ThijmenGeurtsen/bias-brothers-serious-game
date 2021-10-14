package main.java.GameHandler;

import main.java.Canvas.BiasCollection;
import main.java.Canvas.CanvasCollection;
import main.java.Canvas.Scenario;

public class Round {
    private String roundNumber;
    private String roundTitle;
    private Timer timer;
    private Scenario scenario;
    private BiasCollection biasCollection;
    private MeasureQuestionCollection measureQuestionCollection;
    private CanvasCollection canvasCollection;

    public Round(String roundNumber, String roundTitle, Timer timer, Scenario scenario, BiasCollection biasCollection, MeasureQuestionCollection measureQuestionCollection, CanvasCollection canvasCollection ) {
        this.roundNumber = roundNumber;
        this.roundTitle = roundTitle;
        this.timer = timer;
        this.scenario = scenario;
        this.measureQuestionCollection = measureQuestionCollection;
        this.canvasCollection = canvasCollection;
    }
}
