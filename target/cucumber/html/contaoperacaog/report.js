$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/banco/ContaOperacao.feature");
formatter.feature({
  "line": 2,
  "name": "Testar as operações de saque e depósito em uma conta",
  "description": "\r\nO sistema deve prover o saque e depósito na conta de forma correta, seguindo as seguintes restrições:\r\n1) Só libera o saque, se o valor do saque for menor ou igual ao valor do saldo disponível na conta\r\n2) Só libera o depósito, se o valor do depósito for menor ou igual ao valor do limite disponível na conta",
  "id": "testar-as-operações-de-saque-e-depósito-em-uma-conta",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ContaOperacao"
    }
  ]
});
formatter.background({
  "line": 8,
  "name": "Cria uma conta no banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "foi criada a conta do \"Zé\" de número 123 com limite 600 e saldo 500",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Zé",
      "offset": 23
    },
    {
      "val": "123",
      "offset": 37
    },
    {
      "val": "600",
      "offset": 52
    },
    {
      "val": "500",
      "offset": 64
    }
  ],
  "location": "ContaOperacaoSteps.groovy:14"
});
formatter.result({
  "duration": 24135436,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Testar saque em conta com saldo disponível",
  "description": "",
  "id": "testar-as-operações-de-saque-e-depósito-em-uma-conta;testar-saque-em-conta-com-saldo-disponível",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "solicita um saque de 400 na conta",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "o saldo da conta fica 100",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "o saque é realizado",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 21
    }
  ],
  "location": "ContaOperacaoSteps.groovy:26"
});
formatter.result({
  "duration": 162569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 22
    }
  ],
  "location": "ContaOperacaoSteps.groovy:32"
});
formatter.result({
  "duration": 285728,
  "status": "passed"
});
formatter.match({
  "location": "ContaOperacaoSteps.groovy:38"
});
formatter.result({
  "duration": 8399432,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Cria uma conta no banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "foi criada a conta do \"Zé\" de número 123 com limite 600 e saldo 500",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Zé",
      "offset": 23
    },
    {
      "val": "123",
      "offset": 37
    },
    {
      "val": "600",
      "offset": 52
    },
    {
      "val": "500",
      "offset": 64
    }
  ],
  "location": "ContaOperacaoSteps.groovy:14"
});
formatter.result({
  "duration": 312413,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Testar saque em conta de todo o saldo disponível",
  "description": "",
  "id": "testar-as-operações-de-saque-e-depósito-em-uma-conta;testar-saque-em-conta-de-todo-o-saldo-disponível",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "solicita um saque de 500 na conta",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "o saldo da conta fica 0",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "o saque é realizado",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 21
    }
  ],
  "location": "ContaOperacaoSteps.groovy:26"
});
formatter.result({
  "duration": 102632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    }
  ],
  "location": "ContaOperacaoSteps.groovy:32"
});
formatter.result({
  "duration": 294350,
  "status": "passed"
});
formatter.match({
  "location": "ContaOperacaoSteps.groovy:38"
});
formatter.result({
  "duration": 117822,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Cria uma conta no banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "foi criada a conta do \"Zé\" de número 123 com limite 600 e saldo 500",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Zé",
      "offset": 23
    },
    {
      "val": "123",
      "offset": 37
    },
    {
      "val": "600",
      "offset": 52
    },
    {
      "val": "500",
      "offset": 64
    }
  ],
  "location": "ContaOperacaoSteps.groovy:14"
});
formatter.result({
  "duration": 602247,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Testar saque em conta sem saldo disponível",
  "description": "",
  "id": "testar-as-operações-de-saque-e-depósito-em-uma-conta;testar-saque-em-conta-sem-saldo-disponível",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "solicita um saque de 501 na conta",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "o saldo da conta fica 500",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "o saque não é realizado",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "501",
      "offset": 21
    }
  ],
  "location": "ContaOperacaoSteps.groovy:26"
});
formatter.result({
  "duration": 153127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "ContaOperacaoSteps.groovy:32"
});
formatter.result({
  "duration": 286139,
  "status": "passed"
});
formatter.match({
  "location": "ContaOperacaoSteps.groovy:42"
});
formatter.result({
  "duration": 1693023,
  "status": "passed"
});
});