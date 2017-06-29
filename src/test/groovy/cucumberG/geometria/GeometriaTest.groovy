package cucumberG.geometria

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber
import org.junit.runner.RunWith

/**
 * Created by MarcosHumberto on 29/06/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = 'classpath:cucumber/features/geometria',
        tags = '@Geometria',
        glue = 'classpath:cucumberG.geometria.steps',
        monochrome = true,
        plugin = 'pretty')
class GeometriaTest {
}
