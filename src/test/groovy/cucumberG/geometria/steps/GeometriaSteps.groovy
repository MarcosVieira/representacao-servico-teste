package cucumberG.geometria.steps

import cucumber.api.PendingException
import exemplos.geometria.Quadrado
import exemplos.geometria.QuadradoBuilder

import static org.assertj.core.api.Assertions.assertThat

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Quadrado quadrado
Retangulo retangulo

Given(~/^que o quadrado tem lado de (.*) "([^"]*)"$/) { Double lado, String medida ->
    quadrado = new QuadradoBuilder().comLado(lado).comMedida(medida).criar()
}

Given(~/^que o retângulo tem um lado de (\d+) "([^"]*)"$/) { Double lado, String medida ->
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException()
}

Then(~/^o cálculo do perímetro do quadrado deve dar (.*) "([^"]*)"$/) { Double perimetroEsperado, String medidaEsperada ->
    assertThat(quadrado.perimetro()).isEqualTo(perimetroEsperado)
    assertThat(quadrado.medidaPerimetro()).isEqualTo(medidaEsperada)
}

Then(~/^o cálculo da área do quadrado deve dar (.*) "([^"]*)"$/) { Double areaEsperada, String medidaEsperada ->
    assertThat(quadrado.area()).isEqualTo(areaEsperada)
    assertThat(quadrado.medidaArea()).isEqualTo(medidaEsperada)
}

Then(~/^o cálculo do perímetro do retângulo deve dar (.*) "([^"]*)"$/) { Double perimetroEsperado, String medidaEsperada ->
    assertThat(quadrado.perimetro()).isEqualTo(perimetroEsperado)
    assertThat(quadrado.medidaPerimetro()).isEqualTo(medidaEsperada)
}

Then(~/^o cálculo da área do retângulo deve dar (.*) "([^"]*)"$/) { Double areaEsperada, String medidaEsperada ->
    assertThat(quadrado.area()).isEqualTo(areaEsperada)
    assertThat(quadrado.medidaArea()).isEqualTo(medidaEsperada)
}