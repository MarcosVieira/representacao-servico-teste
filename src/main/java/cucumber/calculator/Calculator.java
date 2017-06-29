package cucumber.calculator;

import java.util.ArrayList;
import java.util.List;

public class Calculator {
    List<Double> stack = new ArrayList<Double>();

    public void push(double arg) {
        stack.add(arg);
    }

    public double divide() {
        int size = stack.size();
        double result = stack.get(size-2) / stack.get(size-1);
        stack.remove(size-1);
        stack.remove(size-2);
        return result;
    }

}