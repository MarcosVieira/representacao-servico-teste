package exemplos.geometria

import groovy.transform.builder.Builder
import groovy.transform.builder.ExternalStrategy

/**
 * Created by MarcosHumberto on 29/06/2017.
 */
class Retangulo implements Figura {
    Double lado1, lado2
    String medida

    Double perimetro() {
        (lado1 + lado2) * 2
    }

    String medidaPerimetro() {
        medida
    }

    Double area() {
        lado1 * lado2
    }

    def medidaArea() {
        medida + '2'
    }

}

@Builder(builderStrategy = ExternalStrategy, forClass = Retangulo, prefix = "com", buildMethodName = "criar")
class RetanguloBuilder {
}


