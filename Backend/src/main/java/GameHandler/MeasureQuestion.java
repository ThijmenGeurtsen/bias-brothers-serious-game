package main.java.GameHandler;

public class MeasureQuestion {    private String measureChar;
    private String measureAnswer;
    private int measurePoints;

    public MeasureQuestion(String measureaChar, String measureAnswer, int measurePoints) {
        this.measureChar = measureaChar;
        this.measureAnswer = measureAnswer;
        this.measurePoints = measurePoints;
    }

    public String getMeasureChar() {
        return measureChar;
    }

    public void setMeasureChar(String measureChar) {
        this.measureChar = measureChar;
    }

    public String getMeasureAnswer() {
        return measureAnswer;
    }

    public void setMeasureAnswer(String measureAnswer) {
        this.measureAnswer = measureAnswer;
    }

    public int getMeasurePoints() {
        return measurePoints;
    }

    public void setMeasurePoints(int measurePoints) {
        this.measurePoints = measurePoints;
    }



}
