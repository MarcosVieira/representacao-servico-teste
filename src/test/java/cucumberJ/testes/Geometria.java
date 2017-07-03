package cucumberJ.testes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/geometria",
		tags = "@Geometria",
		glue = "classpath:cucumberG.geometria.steps",
		monochrome = true,
		plugin = {"pretty", "html:target/cucumber/html/geometria", "json:target/cucumber/json/geometria", "junit:target/cucumber/xml/geometria"})
public class Geometria {
}
