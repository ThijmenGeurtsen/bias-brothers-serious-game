package main.java.Canvas;

public class Bias {

    private String Char;
    private String biasName;
    private String biasDescription;
    private String biasExample;
    private String points;

    public Bias(String Char, String biasName, String biasDescription, String biasExample, String points) {
        this.Char = Char;
        this.biasName = biasName;
        this.biasDescription = biasDescription;
        this.biasExample = biasExample;
        this.points = points;
    }

    public String getChar() {
        return Char;
    }

    public void setChar(String aChar) {
        Char = aChar;
    }

    public String getBiasName() {
        return biasName;
    }

    public void setBiasName(String biasName) {
        this.biasName = biasName;
    }

    public String getBiasDescription() {
        return biasDescription;
    }

    public void setBiasDescription(String biasDescription) {
        this.biasDescription = biasDescription;
    }

    public String getBiasExample() {
        return biasExample;
    }

    public void setBiasExample(String biasExample) {
        this.biasExample = biasExample;
    }

    public String getPoints() {
        return points;
    }

    public void setPoints(String points) {
        this.points = points;
    }

}

