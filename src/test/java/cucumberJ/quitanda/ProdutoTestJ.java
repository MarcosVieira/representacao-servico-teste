package cucumberJ.quitanda;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/quitanda",
		tags = "@Produto",
		glue = "classpath:cucumberJ.quitanda.steps",
		monochrome = true,
		plugin = {"pretty", "html:target/cucumber/html/produtoj", "json:target/cucumber/json/produtoj", "junit:target/cucumber/xml/produtoj"})
public class ProdutoTestJ {
	
}
