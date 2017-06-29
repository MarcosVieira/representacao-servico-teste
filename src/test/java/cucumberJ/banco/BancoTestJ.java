package cucumberJ.banco;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/banco",
		tags = "@Banco", 
		glue = "classpath:cucumberJ.banco.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/bancoj", "json:target/cucumber/json/bancoj", "junit:target/cucumber/xml/bancoj"})
public class BancoTestJ {
	
}
