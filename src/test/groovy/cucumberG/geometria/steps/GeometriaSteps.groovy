package cucumberG.geometria.steps

import cucumber.api.PendingException
import exemplos.geometria.Quadrado
import exemplos.geometria.QuadradoBuilder
import exemplos.geometria.Retangulo
import exemplos.geometria.RetanguloBuilder

import static org.assertj.core.api.Assertions.assertThat

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Quadrado quadrado
Retangulo retangulo

Given(~/^que o quadrado tem lado de (.*) "([^"]*)"$/) { Double lado, String medida ->
    quadrado = new QuadradoBuilder().comLado(lado).comMedida(medida).criar()
}

Given(~/^que o retângulo tem um lado de (.*) e outro de (.*) "([^"]*)"$/) { Double lado1, Double lado2, String medida ->
    retangulo = new RetanguloBuilder().comLado1(lado1).comLado2(lado2).comMedida(medida).criar()
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
    assertThat(retangulo.perimetro()).isEqualTo(perimetroEsperado)
    assertThat(retangulo.medidaPerimetro()).isEqualTo(medidaEsperada)
}

Then(~/^o cálculo da área do retângulo deve dar (.*) "([^"]*)"$/) { Double areaEsperada, String medidaEsperada ->
    assertThat(retangulo.area()).isEqualTo(areaEsperada)
    assertThat(retangulo.medidaArea()).isEqualTo(medidaEsperada)
}