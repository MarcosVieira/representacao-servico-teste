package cucumberJ.quitanda;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/quitanda",
		tags = "@Quitanda",
		glue = "classpath:cucumberG.steps.quitanda",
		monochrome = true,
		plugin = {"pretty", "html:target/cucumber/html/quitandag", "json:target/cucumber/json/quitandag", "junit:target/cucumber/xml/quitandag"})
public class QuitandaTestG {
	
}
