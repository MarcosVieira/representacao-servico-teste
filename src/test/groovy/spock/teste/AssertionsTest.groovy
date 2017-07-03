package spock.teste

import spock.lang.Narrative
import spock.lang.Specification
import spock.lang.Title
@Narrative("Testar o uso das assercoes disponiveis no Spock")
@Title("Testa assertions")
class AssertionsTest extends Specification {
    def "comparing x and y"() {
        def x = 1
        def y = 2

        expect:
            x < y    // OK
//            x == y   // BOOM!
    }

    def "maximum of two numbers"() {
        expect:
            Math.max(a, b) == c

        where:
            a << [7, 4, 9, 3]
            b << [3, 5, 9, 8]
            c << [7, 5, 9, 8]
    }

}

