package cucumberJ.calculadora.steps;

import static org.assertj.core.api.Assertions.assertThat;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exemplos.calculadora.Calculadora;

public class CalculadoraSteps {

    private Calculadora calculadora = new Calculadora();

    @Given("^que foi informado (.*) para a calculadora$")
    public void que_foi_informado_para_a_calculadora(final String number) throws Throwable {
        this.calculadora.adiciona(Double.valueOf(number));
    }

    @When("^eu peço para ser feita a divisão$")
    public void eu_peco_para_ser_feita_a_divisao() throws Throwable {
        this.calculadora.divide();
    }

    @When("^eu peço para ser feita a multiplicação$")
    public void eu_peco_para_ser_feita_a_multiplicacao() throws Throwable {
        this.calculadora.multiplica();
    }


    @Then("^o resultado calculado deverá ser (.*)$")
    public void o_resultado_calculado_devera_ser(final String resultado) throws Throwable {
        assertThat(this.calculadora.getResultado()).isEqualTo(Double.valueOf(resultado));
    }

}
