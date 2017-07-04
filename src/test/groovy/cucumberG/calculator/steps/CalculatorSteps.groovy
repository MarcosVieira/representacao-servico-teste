package cucumberG.calculator.steps

import exemplos.calculator.Calculator

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Calculator calc = new Calculator()
double result

Given(~"I have entered (\\d+) into the calculator") { double numero ->
    calc.push numero
}

When(~"I press (\\w+)") { String operacao ->
    result = calc."$operacao"()
}

Then(~"the stored result should be (.*)") { double expected ->
    assert expected == result
}