package cucumberJ.banco;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/banco",
		tags = "@Conta", 
		glue = "classpath:cucumberG.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/contag", "json:target/cucumber/json/contag", "junit:target/cucumber/xml/contag"})
public class ContaTestG {
	
}
