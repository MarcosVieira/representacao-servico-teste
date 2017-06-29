package exemplos.geometria

import groovy.transform.builder.Builder
import groovy.transform.builder.ExternalStrategy

/**
 * Created by MarcosHumberto on 29/06/2017.
 */
class Retangulo {
    Double lado1

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

@Builder(builderStrategy = ExternalStrategy, forClass = Retangulo, prefix = "com", buildMethodName = "criar")
class RetanguloBuilder {
}


