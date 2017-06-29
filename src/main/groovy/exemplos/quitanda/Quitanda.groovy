package exemplos.quitanda

import groovy.transform.builder.Builder
import groovy.transform.builder.ExternalStrategy
import org.apache.commons.lang3.StringUtils

class Quitanda {

    String nome
    List<Produto> produtos

    Integer obterQuantidadeItens() {
        int quantidadeItens = 0
        produtos.each {it -> quantidadeItens += it.getQuantidadeEstoque()}
        quantidadeItens
    }

    Double obterTotalItens() {
        double totalItens = 0
        produtos.each {it -> totalItens += (it.getQuantidadeEstoque() * it.getPreco())}
        totalItens
    }

    String obterRelacaoProdutoAbaixoEstoqueMinimo(int estoqueMinimo) {
        String relacaoProdutos = ""
        produtos.findAll{ it.getQuantidadeEstoque() < estoqueMinimo}.each {it -> relacaoProdutos += (it.getNumero() + ",")}
        StringUtils.chop(relacaoProdutos)
    }
}

@Builder(builderStrategy = ExternalStrategy, forClass = Quitanda, prefix = "com", buildMethodName = "criar")
class QuitandaBuilder {
    QuitandaBuilder() {
        comProdutos(new ArrayList<Produto>())
    }
}

