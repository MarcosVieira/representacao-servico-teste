package cucumberJ.banco;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/banco",
		tags = "@Banco", 
		glue = "classpath:cucumberG.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/bancog", "json:target/cucumber/json/bancog", "junit:target/cucumber/xml/bancog"})
public class BancoTestG {
	
}
