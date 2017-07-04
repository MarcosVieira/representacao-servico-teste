package spock.teste

import exemplos.teste.Loan
import org.junit.Test
import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title

import java.lang.reflect.Modifier

import static org.assertj.core.api.Assertions.assertThat

@Narrative("Testar o uso das assercoes disponiveis no Spock")
@Title("Testa assertions")
class LoanSpecification extends Specification {

    def "verificando o acesso aos atributos da classe"() {
        given: "que um objeto foi criado"
            def loan = new Loan()
        when: "o atributo é setado com um valor"
            loan.balance = 3000
        then: "o novo valor deve estar configurado"
            assertThat(loan.balance).isEqualTo(3000)
    }

    def "verificando o modificador dos atributos da classe"() {
        given: "que o campo do objeto foi obtido"
            def field = Loan.class.getDeclaredField("balance")
        expect: "o campo deve estar marcado como private"
            assertThat(Modifier.isPrivate(field.modifiers)).isTrue()
    }

}
