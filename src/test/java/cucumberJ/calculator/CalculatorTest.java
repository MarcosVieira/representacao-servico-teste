package cucumberJ.calculator;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:cucumber/features/calculator",
        tags = "@Calculator",
        glue = "classpath:cucumberG.calculator.steps",
        monochrome = true,
        strict = true,
        plugin = {"pretty", "html:target/cucumber/html/calculator", "json:target/cucumber/json/calculator", "junit:target/cucumber/xml/calculator"})
public class CalculatorTest {
}
