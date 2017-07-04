package cucumberG.banco.steps

import exemplos.banco.Conta
import exemplos.banco.ContaBuilder

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
