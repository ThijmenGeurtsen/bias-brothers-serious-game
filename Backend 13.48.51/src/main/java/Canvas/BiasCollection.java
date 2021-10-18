package main.java.Canvas;

import java.util.ArrayList;

public class BiasCollection {

    private ArrayList<Bias> biasCollection;

    public BiasCollection() {
        this.biasCollection = new ArrayList<Bias>();
    }

    public void addBias(Bias bias) {
        this.biasCollection.add(bias);
    }

}
