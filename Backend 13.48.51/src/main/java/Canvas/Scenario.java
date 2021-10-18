package main.java.Canvas;

public class Scenario {

    private String scenarioTitle;
    private String scenarioText;

    public Scenario(String scenarioTitle, String scenarioText){
        this.scenarioTitle = scenarioTitle;
        this.scenarioText = scenarioText;
    }

    public String getScenarioTitle() {
        return scenarioTitle;
    }

    public void setScenarioTitle(String scenarioTitle) {
        this.scenarioTitle = scenarioTitle;
    }

    public String getScenarioText() {
        return scenarioText;
    }

    public void setScenarioText(String scenarioText) {
        this.scenarioText = scenarioText;
    }
}
