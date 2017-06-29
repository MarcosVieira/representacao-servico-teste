package cucumberJ.library;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/library",
		tags = "@Library",
		glue = "classpath:cucumberJ.library.steps",
		monochrome = true,
		strict = true,
		plugin = {"pretty", "html:target/cucumber/html/library", "json:target/cucumber/json/library", "junit:target/cucumber/xml/library"})
public class LibraryTest {
}
