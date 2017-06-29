package cucumberG.quitanda.steps

import exemplos.quitanda.Produto
import exemplos.quitanda.ProdutoBuilder

import static org.assertj.core.api.Assertions.assertThat

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Produto produto
Boolean seVendaFeita

Given(~/^foi criado o produto "([^"]*)" de número (\d+) com preço (.*) e estoque (\d+)$/) {
    String descricao, Integer numero, Double preco, Integer estoque ->

    produto = new ProdutoBuilder()
            .comNumero(numero)
            .comDescricao(descricao)
            .comPreco(preco)
            .comQuantidadeEstoque(estoque)
            .criar()
}

When(~/^solicita a venda de (\d+) do produto$/) {
    Integer venda ->

    seVendaFeita = produto.vender(venda)
}

When(~/^é feita uma reposição de (\d+) do produto$/) {
    Integer reposicao ->

    produto.repor(reposicao)
}

Then(~/^a venda é realizada$/) { ->
    assertThat(seVendaFeita).isTrue()
}

Then(~/^a venda não é realizada$/) { ->
    assertThat(seVendaFeita).isFalse()
}

Then(~/^o estoque do produto fica (\d+)$/) {
    Integer quantidadeEstoqueEsperado ->

    assertThat(produto.getQuantidadeEstoque()).isEqualTo(quantidadeEstoqueEsperado)
}

Then(~/^a quantidade vendida é (\d+)$/) {
    Integer quantidadeVendidaEsperado ->

    assertThat(produto.getQuantidadeVendida()).isEqualTo(quantidadeVendidaEsperado)
}

Then(~/^e o total das vendas do produto será de (.*)$/) {
    Double totalVendasEsperado ->

    assertThat(produto.getQuantidadeVendida() * produto.getPreco()).isEqualTo(totalVendasEsperado)
}

