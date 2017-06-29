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

Given(~/^a conta criada para o dono "([^"]*)" de número (\d+) com limite (\d+) e saldo (\d+)$/) {
    String dono, int numero, int limite, int saldo ->
    ContaBuilder builder = new ContaBuilder()

    conta = builder
                .comNumero(numero)
                .comDono(dono)
                .comLimite(limite)
                .comSaldo(saldo)
                .criar()
}

When(~/^o dono realiza um depósito no valor de (\d+) na conta$/) {
    double valorDeposito ->

    assertThat(conta.depositar(valorDeposito)).isTrue()
}

When(~/^o dono realiza um saque no valor de (\d+) na conta$/) {
    double valorSaque ->

    assertThat(conta.sacar(valorSaque)).isTrue()
}

Then(~/^o dono tem saldo na conta no valor de (\d+)$/) {
    double saldoEsperado ->

    assertThat(conta.getSaldo()).isEqualTo(saldoEsperado)
}



