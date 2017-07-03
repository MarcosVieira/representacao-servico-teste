package spock.geometria

import exemplos.geometria.Quadrado
import exemplos.geometria.QuadradoBuilder
import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title

@Narrative("Avaliar as funcionalidades disponiveis na biblioteca de cálculo de perímetro e área de um quadrado")
@Title("Avalia cálculo de perímetro e área do quadrado")
class QuadradoSpecification extends Specification {

    def "Calcular o perímetro de um quadrado"() {
        given: "Que o quadrado tem 5m de lado"
            Quadrado quadrado = new QuadradoBuilder()
                .comLado(5)
                .comMedida("m")
                .criar()
        when: "Eu peço o cálculo do perímetro do quadrado"
        then: "Deve resultar em 20m de perímetro"
            quadrado.perimetro() == 20
            quadrado.medidaPerimetro() == "m"
    }

    def "Calcular a área de um quadrado"() {
        given: "Que o quadrado tem 4.5m de lado"
            Quadrado quadrado = new QuadradoBuilder()
                .comLado(4.5)
                .comMedida("m")
                .criar()
        when: "Eu peço o cálculo da área do quadrado"
        then: "Deve resultar em 20.25m2 de área"
            quadrado.area() == 20.25
            quadrado.medidaArea() == "m2"
    }

}
