package spock.quitanda

import exemplos.quitanda.ProdutoBuilder
import exemplos.quitanda.Quitanda
import exemplos.quitanda.QuitandaBuilder
import org.junit.Ignore
import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title

@Narrative("Avaliar as funcionalidades disponiveis na quitanda")
@Title("Funcionamento da quitanda")
class QuitandaSpecification extends Specification {

    Quitanda quitanda

    def setup() {
        quitanda = new QuitandaBuilder()
            .comNome("Ze das Couves")
            .criar()
    }

    def cleanup() {
        quitanda = null
    }

//    def "Criar, processar venda e reposição de produtos"() {
//        given: "o produto é criado"
//
//        def produto = new ProdutoBuilder()
//                .comNumero(numero)
//                .comDescricao(descricao)
//                .comPreco(preco)
//                .comQuantidadeEstoque(estoque)
//                .criar()
//
//        when: "faço a primeira venda"
//        produto.vender(primeira_venda)
//        and: "faço a segunda venda"
//        produto.vender(segunda_venda)
//        and: "e é feita a reposição do produto"
//        produto.repor(reposicao)
//        then: "o estoque é atualizado com a baixa das vendas e reposição"
//        produto.getQuantidadeEstoque() == estoque_esperado
//        and: "a quantidade vendida é atualizada para a soma das quantidades das vendas"
//        produto.getQuantidadeVendida() == vendas_esperada
//        and: "o total da venda do produto é a soma das duas vendas feitas"
//        produto.getQuantidadeVendida() * produto.getPreco() == total_vendas
//        where:
//        descricao       | numero | preco | estoque
//        "pepino kg"     | 111    | 3.50  | 10
//        "pimentao kg"   | 123    | 5.00  | 8
//        "gengibre kg"   | 231    | 3.00  | 6
//        "cebola kg"     | 222    | 2.50  | 10
//        "quiabo kg"     | 333    | 1.80  | 15
//        "manga und"     | 321    | 0.50  | 50
//        "maçã fuji und" | 231    | 0.60  | 30
//        "maçã gala und" | 232    | 0.70  | 20
//    }


//    def "Fazer uma venda com produto disponível"() {
//        when: "Eu solicito a venda de 2 do produto"
//        def seVendaFeita = produto.vender(2)
//        then: "A venda é realizada"
//        seVendaFeita
//        produto.getQuantidadeEstoque() == 3
//        produto.getQuantidadeVendida() == 2
//    }

//    def "Fazer uma venda com produto indisponível"() {
//        when: "Eu solicito a venda de 6 do produto"
//        def seVendaFeita = produto.vender(6)
//        then: "A venda não é realizada"
//        !seVendaFeita
//        and: "o estoque não se altera"
//        produto.getQuantidadeEstoque() == 5
//        and: "a quantidade vendida não se altera"
//        produto.getQuantidadeVendida() == 0
//    }

//    def "Fazer sequência de venda com produto disponível"() {
//        when: "Eu solicito a venda de 2 do produto e a venda de 3 do produto"
//        def seVendaFeita = produto.vender(2) && produto.vender(3)
//        then: "A venda é realizada"
//        seVendaFeita
//        and: "o estoque é atualizado"
//        produto.getQuantidadeEstoque() == 0
//        and: "a quantidade vendida é a soma das duas vendas"
//        produto.getQuantidadeVendida() == 5
//    }

//    def "Fazer sequência de venda com produto indisponível"() {
//        when: "Eu solicito a venda de 3 do produto e a venda de 4 do produto"
//        def seVendaFeita = produto.vender(3) && produto.vender(4)
//        then: "A última venda não é realizada"
//        !seVendaFeita
//        and: "apenas a primeira venda atualiza o estoque"
//        produto.getQuantidadeEstoque() == 2
//        and: "apenas a primeira venda é contabilizada"
//        produto.getQuantidadeVendida() == 3
//    }

}
