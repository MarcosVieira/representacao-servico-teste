package cucumberJ.calculadora;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:cucumber/features/calculadora",
        tags = "@Calculadora",
        glue = "classpath:cucumberJ.calculadora.steps",
        monochrome = true,
        strict = true,
        plugin = {"pretty", "html:target/cucumber/html/calculadora", "json:target/cucumber/json/calculadora", "junit:target/cucumber/xml/calculadora"})
public class CalculadoraTest {
}



