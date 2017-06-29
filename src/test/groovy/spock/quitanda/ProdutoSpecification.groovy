package spock.quitanda

import exemplos.quitanda.Produto
import exemplos.quitanda.ProdutoBuilder
import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title

@Narrative("Avaliar as funcionalidades disponiveis para tratar um produto")
@Title("Funcionamento do produto")
class ProdutoSpecification extends Specification {

    Produto produto

    def setup() {
        produto = new ProdutoBuilder()
                .comNumero(123)
                .comDescricao("abacate kg")
                .comPreco(2.50)
                .comQuantidadeEstoque(5)
                .criar()
    }

    def cleanup() {
        produto = null
    }

    def "Fazer uma venda com produto disponível"() {
        when: "Eu solicito a venda de 2 do produto"
        def seVendaFeita = produto.vender(2)
        then: "A venda é realizada"
        seVendaFeita
        produto.getQuantidadeEstoque() == 3
        produto.getQuantidadeVendida() == 2
    }

    def "Fazer uma venda com produto indisponível"() {
        when: "Eu solicito a venda de 6 do produto"
        def seVendaFeita = produto.vender(6)
        then: "A venda não é realizada"
        !seVendaFeita
        and: "o estoque não se altera"
        produto.getQuantidadeEstoque() == 5
        and: "a quantidade vendida não se altera"
        produto.getQuantidadeVendida() == 0
    }

    def "Fazer sequência de venda com produto disponível"() {
        when: "Eu solicito a venda de 2 do produto e a venda de 3 do produto"
        def seVendaFeita = produto.vender(2) && produto.vender(3)
        then: "A venda é realizada"
        seVendaFeita
        and: "o estoque é atualizado"
        produto.getQuantidadeEstoque() == 0
        and: "a quantidade vendida é a soma das duas vendas"
        produto.getQuantidadeVendida() == 5
    }

    def "Fazer sequência de venda com produto indisponível"() {
        when: "Eu solicito a venda de 3 do produto e a venda de 4 do produto"
        def seVendaFeita = produto.vender(3) && produto.vender(4)
        then: "A última venda não é realizada"
        !seVendaFeita
        and: "apenas a primeira venda atualiza o estoque"
        produto.getQuantidadeEstoque() == 2
        and: "apenas a primeira venda é contabilizada"
        produto.getQuantidadeVendida() == 3
    }

}
