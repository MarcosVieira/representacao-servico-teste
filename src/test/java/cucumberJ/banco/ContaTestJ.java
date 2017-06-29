package cucumberJ.banco;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/banco",
		tags = "@Conta", 
		glue = "classpath:cucumberJ.banco.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/contaj", "json:target/cucumber/json/contaj", "junit:target/cucumber/xml/contaj"})
public class ContaTestJ {
	
}
