package br.gov.tcu.apps.representacao.autuacao

import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title
/**
 * Created by eric on 12/05/17.
 */
@Narrative("""Como Servidor do TCU 
Gostaria de autuar uma Representação 
a partir de um documento do tipo Representação - Inicial""")
@Title("Especificação qualquer")
class AutuaRepresentacaoPorDocumentoSpec extends Specification {

    PassosAutuacao passosAutuacao = new PassosAutuacao()

    def "Autuar representação a partir do documento"() {
        given: "Existe um documento do tipo Representação - inicial"
        println "given"
        passosAutuacao.verifica1()

        when: "when bla bla bla"
        println "when"
        passosAutuacao.verifica2()

        then: "then bla bla bla"
        println "then"
    }

    class PassosAutuacao {
        public verifica1() {
            println "verifica1"
        }
        public verifica2() {
            println "verifica2"
        }

    }
}
