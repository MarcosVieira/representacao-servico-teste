package cucumberJ.banco.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exemplos.banco.Conta;
import exemplos.banco.ContaBuilder;

import static org.assertj.core.api.Assertions.assertThat;

public class ContaSteps {
	 
    private Conta conta;

    @Given("^a conta criada para o dono \"(.*?)\" de número (\\d+) com limite (\\d+) e saldo (\\d+)$")
    public void a_conta_criada_para_o_dono_de_numero_com_limite_e_saldo(final String dono, final int numero, final Double limite,
                 final Double saldo) throws Throwable {
        final ContaBuilder builder = new ContaBuilder();

        this.conta = builder
                        .comNumero(numero)
                        .comDono(dono)
                        .comLimite(limite)
                        .comSaldo(saldo)
                        .criar();
    }

    @When("^o dono realiza um depósito no valor de (\\d+) na conta$")
    public void o_dono_realiza_um_deposito_na_conta(final Double valorDeposito) throws Throwable {
    	assertThat(conta.depositar(valorDeposito)).isTrue();
    }

    @When("^o dono realiza um saque no valor de (\\d+) na conta$")
    public void o_dono_realiza_um_saque_na_conta(final Double valorSaque) throws Throwable {
    	assertThat(conta.sacar(valorSaque)).isTrue();
    }

    @Then("^o dono tem saldo na conta no valor de (\\d+)$")
    public void o_dono_tem_o_saldo_no_valor_de(final Double saldoEsperado) throws Throwable {
    	assertThat(conta.getSaldo()).isEqualTo(saldoEsperado);
    }
    
}
