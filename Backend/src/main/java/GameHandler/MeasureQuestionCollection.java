package main.java.GameHandler;

import java.util.ArrayList;

public class MeasureQuestionCollection {
    private ArrayList<MeasureQuestion> measureQuestionCollection  = new ArrayList<MeasureQuestion>();

    public MeasureQuestionCollection(ArrayList<MeasureQuestion> measureQuestionCollection) {
        this.measureQuestionCollection = measureQuestionCollection;
    }

    public void addMeasureQuestion(MeasureQuestion measureQuestion) {
        this.measureQuestionCollection.add(measureQuestion);
    }
}
