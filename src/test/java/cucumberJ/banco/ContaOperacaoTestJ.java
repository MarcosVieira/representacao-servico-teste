package cucumberJ.banco;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/banco",
		tags = "@ContaOperacao", 
		glue = "classpath:cucumberJ.banco.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/contaoperacaoj", "json:target/cucumber/json/contaoperacaoj", "junit:target/cucumber/xml/contaoperacaoj"})
public class ContaOperacaoTestJ {
	
}
