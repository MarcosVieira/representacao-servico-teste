package spock.quitanda

import exemplos.quitanda.ProdutoBuilder
import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title

@Narrative("Avaliar o funcionamento das operações de venda e reposição dos produtos")
@Title("Venda e reposição")
class ProdutoVendaReposicaoSpecification extends Specification {

    def "Criar, processar venda e reposição de produtos"() {
        given: "o produto é criado"
        def produto = new ProdutoBuilder()
                .comNumero(numero)
                .comDescricao(descricao)
                .comPreco(preco)
                .comQuantidadeEstoque(estoque)
                .criar()
        when: "faço a primeira venda"
        produto.vender(primeira_venda)
        and: "faço a segunda venda"
        produto.vender(segunda_venda)
        and: "e é feita a reposição do produto"
        produto.repor(reposicao)
        then: "o estoque é atualizado com a baixa das vendas e reposição"
        produto.getQuantidadeEstoque() == estoque_esperado
        and: "a quantidade vendida é atualizada para a soma das quantidades das vendas"
        produto.getQuantidadeVendida() == vendas_esperada
        and: "o total da venda do produto é a soma das duas vendas feitas"
        produto.getQuantidadeVendida() * produto.getPreco() == total_vendas
        where:
        descricao     | numero | preco | estoque | primeira_venda | segunda_venda | reposicao | estoque_esperado | vendas_esperada | total_vendas
        "pepino kg"   | 111    | 3.50  | 10      | 2              | 5             | 1         | 4                | 7               | 24.50
        "pimentao kg" | 123    | 5.00  | 8       | 3              | 5             | 1         | 1                | 8               | 40.00
        "gengibre kg" | 234    | 3.00  | 6       | 4              | 4             | 2         | 4                | 4               | 12.00
        "pimenta kg"  | 345    | 4.50  | 3       | 5              | 4             | 3         | 6                | 0               |  0.00
    }

}


