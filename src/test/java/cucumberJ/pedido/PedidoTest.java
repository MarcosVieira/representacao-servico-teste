package cucumberJ.pedido;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:cucumber/features/pedido",
		tags = "@Pedido",
		glue = "classpath:cucumberJ.pedido.steps",
		monochrome = true,
		plugin = {"pretty", "html:target/cucumber/html/pedido", "json:target/cucumber/json/pedido", "junit:target/cucumber/xml/pedido"})
public class PedidoTest {
}
