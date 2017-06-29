package cucumberG.banco.steps

import cucumber.api.DataTable
import cucumber.api.PendingException
import cucumber.banco.Banco
import cucumber.banco.Conta
import cucumber.banco.ContaBuilder
import org.apache.commons.lang3.StringUtils

import static org.assertj.core.api.Assertions.assertThat

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Conta conta;
Boolean saqueEfetuado

Given(~/^foi criada a conta do "([^"]*)" de número (\d+) com limite (\d+) e saldo (\d+)$/) {
    String dono, int numero, int limite, int saldo ->
    ContaBuilder builder = new ContaBuilder()

    conta = builder
               .comNumero(numero)
               .comDono(dono)
               .comLimite(limite)
               .comSaldo(saldo)
               .criar()
}

When(~/^solicita um saque de (\d+) na conta$/) {
    int valorSaque ->

    saqueEfetuado = conta.sacar(valorSaque)
}

Then(~/^o saldo da conta fica (\d+)$/) {
    double saldoEsperado ->

    assertThat(conta.getSaldo()).isEqualTo(saldoEsperado)
}

Then(~/^o saque é realizado$/) { ->
    assertThat(saqueEfetuado).isTrue()
}

Then(~/^o saque não é realizado$/) { ->
    assertThat(saqueEfetuado).isFalse()
}
