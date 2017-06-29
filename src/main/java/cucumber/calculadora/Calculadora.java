package cucumber.calculadora;

import java.util.ArrayList;
import java.util.List;
import bsh.Interpreter;

public class Calculadora {

    private List<Double> numbers;
    private Double result;

    public Calculadora() {
         this.numbers = new ArrayList<Double>();
         this.result = null;
    }

    public Double getResultado() {
        if (this.result == null) {
            throw new IllegalStateException("nenhum cálculo feito");
        }

        return this.result;
    }

    public void adiciona(final Double number) {
        this.numbers.add(number);
    }

    public void executa(final String operacao) {
        final Interpreter interpreter = new Interpreter();
        try {
            interpreter.eval(operacao);
            this.result =  Double.valueOf(interpreter.eval(operacao).toString());
        } catch (final Exception e) {
            this.result = null;
        }
    }

    public Double subtrai() {
        validaOperadores(2, "operação de subtração inválida");
        this.result = this.numbers.get(this.numbers.size() - 2) - this.numbers.get(this.numbers.size() - 1);
        return getResultado();
    }

    public Double divide() {
        validaOperadores(2, "operação de divisão inválida");
        this.result = this.numbers.get(this.numbers.size() - 2) / this.numbers.get(this.numbers.size() - 1);
        return getResultado();
    }

    public Double multiplica() {
        validaOperadores(2, "operação de multiplicação inválida");
        this.result = this.numbers.get(this.numbers.size() - 2) * this.numbers.get(this.numbers.size() - 1);
        return getResultado();
    }

    public void validaOperadores(final int qtdMinimaOperadores, final String mensagemErro) {
        if (this.numbers.size() < qtdMinimaOperadores) {
            throw new IllegalStateException(mensagemErro);
        }
    }

}
