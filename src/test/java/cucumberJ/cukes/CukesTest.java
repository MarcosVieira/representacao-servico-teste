package cucumberJ.cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/cukes",
		tags = "@Cukes",
		glue = "classpath:cucumberG.cukes.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/cukes", "json:target/cucumber/json/cukes", "junit:target/cucumber/xml/cukes"})
public class CukesTest {
}
