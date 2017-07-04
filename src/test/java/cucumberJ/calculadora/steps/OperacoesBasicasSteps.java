package cucumberJ.calculadora.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exemplos.calculadora.Calculadora;

import static org.assertj.core.api.Assertions.assertThat;

public class OperacoesBasicasSteps {

    private String operacao;
    private Double resultado;

    @Given("^que foi informado \"([^\"]*)\"$")
    public void que_foi_informado(final String operacao) throws Throwable {
        this.operacao = operacao;
    }

    @When("^for executada a operação$")
    public void for_executada_a_operacao() throws Throwable {
        final Calculadora calculadora = new Calculadora();
        calculadora.executa(this.operacao);
        this.resultado = calculadora.getResultado();
    }

    @Then("^o resultado deverá ser \"([^\"]*)\"$")
    public void o_resultado_devera_ser(final String resultado) throws Throwable {
        assertThat(this.resultado).isEqualTo(Double.valueOf(resultado));
    }

    @Then("^Eu subtraio (\\d+) de (\\d+)$")
    public void euSubtraioDe(final Double number1, final Double number2) throws Throwable {
        final Calculadora calculadora = new Calculadora();
        calculadora.adiciona(number2);
        calculadora.adiciona(number1);
        this.resultado = calculadora.subtrai();
    }

    @Then("^O resultado é (\\d+)$")
    public void oResultadoE(final double resultado) throws Throwable {
        assertThat(this.resultado).isEqualTo(Double.valueOf(resultado));
    }
}
