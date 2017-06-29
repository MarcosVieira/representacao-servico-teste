$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/calculadora/Divisao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: en"
    }
  ],
  "line": 3,
  "name": ": Divisão",
  "description": "Para evitar erros, os caixas devem poder calcular frações",
  "id": ":-divisão",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Calculadora"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": ": Resultado com parte decimal",
  "description": "",
  "id": ":-divisão;:-resultado-com-parte-decimal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "que foi informado 3 para a calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "que foi informado 2 para a calculadora",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "eu peço para ser feita a divisão",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "o resultado calculado deverá ser 1.5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 67221078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 40501,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.eu_peco_para_ser_feita_a_divisao()"
});
formatter.result({
  "duration": 39406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.5",
      "offset": 33
    }
  ],
  "location": "CalculadoraSteps.o_resultado_calculado_devera_ser(String)"
});
formatter.result({
  "duration": 22850864,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Resultado inteiro",
  "description": "",
  "id": ":-divisão;resultado-inteiro",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "que foi informado 6 para a calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "que foi informado 3 para a calculadora",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "eu peço para ser feita a divisão",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "o resultado calculado deverá ser 2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 65155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 40739,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.eu_peco_para_ser_feita_a_divisao()"
});
formatter.result({
  "duration": 20716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    }
  ],
  "location": "CalculadoraSteps.o_resultado_calculado_devera_ser(String)"
});
formatter.result({
  "duration": 40774,
  "status": "passed"
});
formatter.uri("cucumber/features/calculadora/Multiplicacao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: en"
    }
  ],
  "line": 3,
  "name": "Multiplicacao",
  "description": "Para evitar erros, os caixas devem poder calcular frações",
  "id": "multiplicacao",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Calculadora"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Resultado com parte decimal para operando com parte decimal",
  "description": "",
  "id": "multiplicacao;resultado-com-parte-decimal-para-operando-com-parte-decimal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "que foi informado 5.5 para a calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "que foi informado 3 para a calculadora",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "eu peço para ser feita a multiplicação",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "o resultado calculado deverá ser 16.5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5.5",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 51705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 25421,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.eu_peco_para_ser_feita_a_multiplicacao()"
});
formatter.result({
  "duration": 29326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16.5",
      "offset": 33
    }
  ],
  "location": "CalculadoraSteps.o_resultado_calculado_devera_ser(String)"
});
formatter.result({
  "duration": 38072,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Resultado inteiro para operando com parte decimal",
  "description": "",
  "id": "multiplicacao;resultado-inteiro-para-operando-com-parte-decimal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "que foi informado 6.5 para a calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "que foi informado 2 para a calculadora",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "eu peço para ser feita a multiplicação",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "o resultado calculado deverá ser 13",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6.5",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 50527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 34250,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.eu_peco_para_ser_feita_a_multiplicacao()"
});
formatter.result({
  "duration": 11347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 33
    }
  ],
  "location": "CalculadoraSteps.o_resultado_calculado_devera_ser(String)"
});
formatter.result({
  "duration": 45397,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Resultado inteiro para operandos inteiros",
  "description": "",
  "id": "multiplicacao;resultado-inteiro-para-operandos-inteiros",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "que foi informado 4 para a calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "que foi informado 3 para a calculadora",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "eu peço para ser feita a multiplicação",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "o resultado calculado deverá ser 12",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 40107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.que_foi_informado_para_a_calculadora(String)"
});
formatter.result({
  "duration": 24995,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.eu_peco_para_ser_feita_a_multiplicacao()"
});
formatter.result({
  "duration": 10207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 33
    }
  ],
  "location": "CalculadoraSteps.o_resultado_calculado_devera_ser(String)"
});
formatter.result({
  "duration": 38480,
  "status": "passed"
});
formatter.uri("cucumber/features/calculadora/OperacoesBasicas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: en"
    }
  ],
  "line": 3,
  "name": "Operações básicas entre dois números",
  "description": "",
  "id": "operações-básicas-entre-dois-números",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Calculadora"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Adiciona dois números",
  "description": "",
  "id": "operações-básicas-entre-dois-números;adiciona-dois-números",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "que foi informado \"2+2\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "for executada a operação",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deverá ser \"4\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2+2",
      "offset": 19
    }
  ],
  "location": "OperacoesBasicasSteps.que_foi_informado(String)"
});
formatter.result({
  "duration": 71163,
  "status": "passed"
});
formatter.match({
  "location": "OperacoesBasicasSteps.for_executada_a_operacao()"
});
formatter.result({
  "duration": 26768738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "OperacoesBasicasSteps.o_resultado_devera_ser(String)"
});
formatter.result({
  "duration": 92437,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Subtrai dois números",
  "description": "",
  "id": "operações-básicas-entre-dois-números;subtrai-dois-números",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "que foi informado \"9-4\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "for executada a operação",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "o resultado deverá ser \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9-4",
      "offset": 19
    }
  ],
  "location": "OperacoesBasicasSteps.que_foi_informado(String)"
});
formatter.result({
  "duration": 51878,
  "status": "passed"
});
formatter.match({
  "location": "OperacoesBasicasSteps.for_executada_a_operacao()"
});
formatter.result({
  "duration": 3663898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "OperacoesBasicasSteps.o_resultado_devera_ser(String)"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Subtração",
  "description": "",
  "id": "operações-básicas-entre-dois-números;subtração",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Eu subtraio 5 de 9",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "O resultado é 4",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    },
    {
      "val": "9",
      "offset": 17
    }
  ],
  "location": "OperacoesBasicasSteps.euSubtraioDe(Double,Double)"
});
formatter.result({
  "duration": 189503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "OperacoesBasicasSteps.oResultadoE(double)"
});
formatter.result({
  "duration": 329357,
  "status": "passed"
});
});