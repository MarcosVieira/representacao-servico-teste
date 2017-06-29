package cucumberJ.quitanda;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/quitanda",
		tags = "@Produto",
		glue = "classpath:cucumberG.steps.quitanda",
		monochrome = true,
		plugin = {"pretty", "html:target/cucumber/html/produtog", "json:target/cucumber/json/produtog", "junit:target/cucumber/xml/produtog"})
public class ProdutoTestG {
	
}
