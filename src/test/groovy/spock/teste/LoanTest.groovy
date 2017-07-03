package spock.teste

import exemplos.teste.Loan
import org.junit.Test

import java.lang.reflect.Modifier

import static org.assertj.core.api.Assertions.assertThat

/**
 * Created by marcao on 03/07/17.
 */
class LoanTest {

    @Test
    void testLoanBalance() {
        def loan = new Loan()
        loan.balance = 3000
        assertThat(loan.balance).isEqualTo(3000)
    }

    @Test
    void testLoanModifier() {
        def field = Loan.class.getDeclaredField("balance")
        assertThat(Modifier.isPrivate(field.modifiers)).isTrue()
    }

}
