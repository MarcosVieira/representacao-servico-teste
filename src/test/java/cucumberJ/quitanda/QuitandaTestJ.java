package cucumberJ.quitanda;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/quitanda",
		tags = "@Quitanda",
		glue = "classpath:cucumberJ.quitanda.steps",
		monochrome = true,
		plugin = {"pretty", "html:target/cucumber/html/quitandaj", "json:target/cucumber/json/quitandaj", "junit:target/cucumber/xml/quitandaj"})
public class QuitandaTestJ {
	
}
