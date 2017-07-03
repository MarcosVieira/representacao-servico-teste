package spock.geometria

import exemplos.geometria.Retangulo
import exemplos.geometria.RetanguloBuilder
import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title

@Narrative("Avaliar as funcionalidades disponiveis na biblioteca de cálculo de perímetro e área de um retângulo")
@Title("Avalia cálculo de perímetro e área do retângulo")
class RetanguloSpecification extends Specification {

    def "Calcular o perímetro de um retângulo"() {
        given: "Que o retângulo tem um lado de 5 e outro de 3m"
            Retangulo retangulo = new RetanguloBuilder()
                .comLado1(5)
                .comLado2(3)
                .comMedida("m")
                .criar()
        when: "Eu peço o cálculo do perímetro do retângulo"
        then: "Deve resultar em 16m de perímetro"
            retangulo.perimetro() == 16
            retangulo.medidaPerimetro() == "m"
    }

    def "Calcular a área de um retângulo"() {
        given: "Que o retângulo tem um lado 4.5 e outro de 2.5cm de lado"
            Retangulo retangulo = new RetanguloBuilder()
                .comLado1(4.5)
                .comLado2(2.5)
                .comMedida("cm")
                .criar()
        when: "Eu peço o cálculo da área do retângulo"
        then: "Deve resultar em 11.25cm2 de área"
            retangulo.area() == 11.25
            retangulo.medidaArea() == "cm2"
    }

}
