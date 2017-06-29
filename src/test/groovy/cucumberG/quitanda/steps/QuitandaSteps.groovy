package cucumberG.quitanda.steps

import cucumber.api.DataTable
import exemplos.quitanda.Produto
import exemplos.quitanda.Quitanda
import exemplos.quitanda.QuitandaBuilder

import static org.assertj.core.api.Assertions.assertThat

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Quitanda quitanda
int estoqueMinimo

Given(~/^que a quitanda é do "([^"]*)"$/) { String nomeQuitanda, DataTable produtos ->
    quitanda = new QuitandaBuilder()
        .comNome(nomeQuitanda)
        .comProdutos(produtos.asList(Produto.class))
        .criar()
}

Then(~/^a quantidade de produtos será (\d+)$/) {
    Integer quantidadeProdutosEsperado ->

    assertThat(quitanda.getProdutos().size()).isEqualTo(quantidadeProdutosEsperado)
}

Then(~/^a quantidade de itens será (\d+)$/) {
    Integer quantidadeItensEsperado ->

    assertThat(quitanda.obterQuantidadeItens()).isEqualTo(quantidadeItensEsperado)
}

Then(~/^o total dos itens será R\$ (.*)$/) {
    Double totalQuitandaEsperado ->

    assertThat(quitanda.obterTotalItens()).isEqualTo(totalQuitandaEsperado)
}

When(~/^pedir a relação dos produtos com estoque abaixo de (\d+)$/) {
    Integer estoqueLimite ->

    estoqueMinimo = estoqueLimite
}

Then(~/^deverá ser mostrada a relação "([^"]*)"$/) {
    String relacaoProduto ->

    assertThat(quitanda.obterRelacaoProdutoAbaixoEstoqueMinimo(estoqueMinimo)).isEqualTo(relacaoProduto);
}

