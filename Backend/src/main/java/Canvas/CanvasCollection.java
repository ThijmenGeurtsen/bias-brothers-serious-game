package main.java.Canvas;

import java.util.ArrayList;

public class CanvasCollection {
    private ArrayList<Canvas> canvasArrayList = new ArrayList<>();

    public CanvasCollection(){

    }


    public void add(Canvas canvas){
        canvasArrayList.add(canvas);
    }
}
