package cucumberJ.banco.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exemplos.banco.Conta;
import exemplos.banco.ContaBuilder;

import static org.assertj.core.api.Assertions.assertThat;

// Classe para tratar os passos dos cenários de saque e depósito
public class ContaOperacaoSteps {

    private Conta conta;
    private boolean saqueEfetuado;

    @Given("^foi criada a conta do \"(.*?)\" de número (\\d+) com limite (\\d+) e saldo (\\d+)$")
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

	@When("^solicita um saque de (\\d+) na conta$")
	public void o_dono_solicita_um_saque_de(final Double valorSaque) throws Throwable {
    	this.saqueEfetuado = this.conta.sacar(valorSaque);
	}

	@Then("^o saldo da conta fica (\\d+)$")
	public void o_saldo_da_conta_fica(final Double saldoEsperado) throws Throwable {
		assertThat(this.conta.getSaldo()).isEqualTo(saldoEsperado);
	}

	@Then("^o saque é realizado$")
	public void o_saque_e_realizado() throws Throwable {
		assertThat(this.saqueEfetuado).isTrue();
	}
	
	@Then("^o saque não é realizado$")
	public void o_saque_nao_e_realizado() throws Throwable {
		assertThat(this.saqueEfetuado).isFalse();
	}
	
}
