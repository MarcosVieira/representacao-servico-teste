package exemplos.geometria

import exemplos.quitanda.Produto
import groovy.transform.builder.Builder
import groovy.transform.builder.ExternalStrategy

/**
 * Created by MarcosHumberto on 29/06/2017.
 */
class Quadrado {
    Double lado
    String medida

    Double perimetro() {
        4 * lado
    }

    String medidaPerimetro() {
        medida
    }

    Double area() {
        lado * lado
    }

    String medidaArea() {
        medida + '2'
    }

}

@Builder(builderStrategy = ExternalStrategy, forClass = Quadrado, prefix = "com", buildMethodName = "criar")
class QuadradoBuilder {
}

