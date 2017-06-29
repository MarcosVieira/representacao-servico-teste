package spock.calculadoraromana

import exemplos.calculadoraromana.CalculadoraRomana
import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title
@Narrative("Calcular o resultado de operaçoes aritmeticas com numeros romanos")
@Title("Operacoes Romanas")
class CalculadoraRomanaSpecification extends Specification {

    def calculadoraRomana

    def setupSpec() {
        println "Setup da especificaçao"
    }

    def cleanupSpec() {
        println "Limpeza da especificaçao"
    }

    def setup() {
        println "Setup do teste"
        calculadoraRomana = new CalculadoraRomana()
    }

    def cleanup() {
        println "Limpeza do teste"
        calculadoraRomana = null
    }

    def "I mais I deve ser igual a II"() {
        when: "Eu adiciono dois numeros romanos"
            def result = calculadoraRomana.soma("I", "I")
        then: "O resultado deve ser a soma dos numeros convertida"
            result == "II"
    }

    def "V mais V deve ser igual a X"() {
        when: "Eu adiciono dois numeros romanos"
            def result = calculadoraRomana.soma("V", "V")
        then: "O resultado deve ser a soma dos numeros convertida"
            result == "X"
    }

    def "O numero menor deve vir ao final"() {
        when:
            def resultado = calculadoraRomana.soma(a, b)
        then:
            resultado == soma
        where:
            a   | b   | soma
            "I" | "I" | "II"
            "V" | "V" | "X"
            "X" | "X" | "XX"
    }

}
