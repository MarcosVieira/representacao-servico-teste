package cucumberJ.testes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/calculadoraromana",
		tags = "@Testes",
		glue = "classpath:cucumberJ.calculadoraromana.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/calculadoraromana", "json:target/cucumber/json/calculadoraromana", "junit:target/cucumber/xml/calculadoraromana"})
public class Testes {
}
