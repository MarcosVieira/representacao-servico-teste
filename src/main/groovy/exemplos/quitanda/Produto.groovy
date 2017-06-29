package exemplos.quitanda

import groovy.transform.builder.Builder
import groovy.transform.builder.ExternalStrategy

/**
 * Created by marcao on 21/06/17.
 */
class Produto {
    Integer numero
    String descricao
    Double preco
    Integer quantidadeEstoque
    Integer quantidadeVendida

    Boolean vender(int quantidade) {
        Boolean vendeu = false
        if (quantidade <= quantidadeEstoque) {
            vendeu = true
            quantidadeEstoque -= quantidade
            quantidadeVendida += quantidade
        }
        vendeu
    }

    void repor(int quantidade) {
        quantidadeEstoque += quantidade
    }
}

@Builder(builderStrategy = ExternalStrategy, forClass = Produto, prefix = "com", buildMethodName = "criar")
class ProdutoBuilder {
    ProdutoBuilder() {
        comQuantidadeEstoque(0)
        comQuantidadeVendida(0)
    }
}

