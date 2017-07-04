package cucumberG.banco.steps

import cucumber.api.DataTable
import exemplos.banco.Banco
import exemplos.banco.BancoBuilder
import exemplos.banco.Conta
import org.apache.commons.lang3.StringUtils

import static org.assertj.core.api.Assertions.assertThat

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Banco banco
double totalDinheiro
Conta contaMaiorSaldo
Conta contaMenorSaldo
List<Conta> listaContasComSaldoAcimaLimite

Given(~/^que as contas são do "([^"]*)"$/) {String nomeBanco, DataTable dataTable ->
    BancoBuilder builder = new BancoBuilder()

    banco = builder
                .comNome(nomeBanco)
                .comContas(dataTable.asList(Conta.class))
                .criar()
}

Then(~/^no banco "([^"]*)"$/) { String nomeBancoEsperado ->
    assertThat(banco.getNome()).isEqualTo(nomeBancoEsperado)
}

Then(~/^a quantidade de contas é (\d+)$/) {int quantidadeContasEsperado ->
    assertThat(banco.getListaDeContas().size()).isEqualTo(quantidadeContasEsperado)
}

When(~/^o cálculo do total de dinheiro$/) { ->
    totalDinheiro = 0
    banco.getListaDeContas().each {it -> totalDinheiro += it.getSaldo()}
}

Then(~/^o total de dinheiro no banco é (\d+)$/) {double totalSaldoEsperado ->
    assertThat(totalDinheiro).isEqualTo(totalSaldoEsperado)
}

When(~/^o cálculo do cliente com maior saldo$/) { ->
    contaMaiorSaldo = banco.getListaDeContas().inject(null) {max, it ->
        (!max || it.getSaldo() > max.getSaldo()) ? it : max
    }
}

Then(~/^o nome do cliente com maior saldo é "([^"]*)"$/) {String nomeEsperado ->
    assertThat(contaMaiorSaldo.getDono()).isEqualTo(nomeEsperado)
}

And(~/^o saldo da conta com maior saldo é (\d+)$/) {double saldoEsperado ->
    assertThat(contaMaiorSaldo.getSaldo()).isEqualTo(saldoEsperado)
}

When(~/^o cálculo do cliente com menor saldo$/) { ->
    contaMenorSaldo = banco.getListaDeContas().inject(null) {min, it ->
        (!min || it.getSaldo() < min.getSaldo()) ? it : min
    }
}

Then(~/^o nome do cliente com menor saldo é "([^"]*)"$/) {String nomeEsperado ->
    assertThat(contaMenorSaldo.getDono()).isEqualTo(nomeEsperado)
}

And(~/^o saldo da conta com menor saldo é (\d+)$/) {double saldoEsperado ->
    assertThat(contaMenorSaldo.getSaldo()).isEqualTo(saldoEsperado)
}

When(~/^o cálculo das contas com saldo igual ou acima de (\d+)$/) {double saldoLimite ->
    listaContasComSaldoAcimaLimite = banco.getListaDeContas().findAll {it -> it.getSaldo() >= saldoLimite}
}

Then(~/^a relação das contas é "([^"]*)"$/) {String relacaoContasEsperado ->
    String relacaoContas = ""
    listaContasComSaldoAcimaLimite.each {it -> relacaoContas += it.getNumero() + ","}
    assertThat(StringUtils.chop(relacaoContas)).isEqualTo(relacaoContasEsperado)
}


