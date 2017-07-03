package cucumberJ.banco;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/banco",
		tags = "@ContaOperacao", 
		glue = "classpath:cucumberG.banco.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/contaoperacaog", "json:target/cucumber/json/contaoperacaog", "junit:target/cucumber/xml/contaoperacaog"})
public class ContaOperacaoTestG {
	
}
