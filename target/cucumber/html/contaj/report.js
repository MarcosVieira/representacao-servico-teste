$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/banco/Conta.feature");
formatter.feature({
  "line": 2,
  "name": "Testar as operações básicas de conta",
  "description": "",
  "id": "testar-as-operações-básicas-de-conta",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Conta"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testar saque e depósito",
  "description": "",
  "id": "testar-as-operações-básicas-de-conta;testar-saque-e-depósito",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "a conta criada para o dono \"\u003cdono\u003e\" de número \u003cnumero\u003e com limite \u003climite\u003e e saldo \u003csaldo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o dono realiza um depósito no valor de \u003cdeposito\u003e na conta",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o dono realiza um saque no valor de \u003cprimeiro_saque\u003e na conta",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "o dono realiza um saque no valor de \u003csegundo_saque\u003e na conta",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "o dono tem saldo na conta no valor de \u003csaldo_esperado\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "testar-as-operações-básicas-de-conta;testar-saque-e-depósito;",
  "rows": [
    {
      "cells": [
        "dono",
        "numero",
        "limite",
        "saldo",
        "deposito",
        "primeiro_saque",
        "segundo_saque",
        "saldo_esperado"
      ],
      "line": 12,
      "id": "testar-as-operações-básicas-de-conta;testar-saque-e-depósito;;1"
    },
    {
      "cells": [
        "Brendo",
        "111",
        "1000",
        "0",
        "100",
        "10",
        "10",
        "80"
      ],
      "line": 13,
      "id": "testar-as-operações-básicas-de-conta;testar-saque-e-depósito;;2"
    },
    {
      "cells": [
        "Hiago",
        "222",
        "1000",
        "0",
        "200",
        "10",
        "10",
        "180"
      ],
      "line": 14,
      "id": "testar-as-operações-básicas-de-conta;testar-saque-e-depósito;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Testar saque e depósito",
  "description": "",
  "id": "testar-as-operações-básicas-de-conta;testar-saque-e-depósito;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Conta"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a conta criada para o dono \"Brendo\" de número 111 com limite 1000 e saldo 0",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o dono realiza um depósito no valor de 100 na conta",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o dono realiza um saque no valor de 10 na conta",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "o dono realiza um saque no valor de 10 na conta",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "o dono tem saldo na conta no valor de 80",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brendo",
      "offset": 28
    },
    {
      "val": "111",
      "offset": 46
    },
    {
      "val": "1000",
      "offset": 61
    },
    {
      "val": "0",
      "offset": 74
    }
  ],
  "location": "ContaSteps.a_conta_criada_para_o_dono_de_numero_com_limite_e_saldo(String,int,Double,Double)"
});
formatter.result({
  "duration": 1687517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 39
    }
  ],
  "location": "ContaSteps.o_dono_realiza_um_deposito_na_conta(Double)"
});
formatter.result({
  "duration": 48326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "ContaSteps.o_dono_realiza_um_saque_na_conta(Double)"
});
formatter.result({
  "duration": 48149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "ContaSteps.o_dono_realiza_um_saque_na_conta(Double)"
});
formatter.result({
  "duration": 28613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 38
    }
  ],
  "location": "ContaSteps.o_dono_tem_o_saldo_no_valor_de(Double)"
});
formatter.result({
  "duration": 63884,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Testar saque e depósito",
  "description": "",
  "id": "testar-as-operações-básicas-de-conta;testar-saque-e-depósito;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Conta"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a conta criada para o dono \"Hiago\" de número 222 com limite 1000 e saldo 0",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o dono realiza um depósito no valor de 200 na conta",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o dono realiza um saque no valor de 10 na conta",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "o dono realiza um saque no valor de 10 na conta",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "o dono tem saldo na conta no valor de 180",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hiago",
      "offset": 28
    },
    {
      "val": "222",
      "offset": 45
    },
    {
      "val": "1000",
      "offset": 60
    },
    {
      "val": "0",
      "offset": 73
    }
  ],
  "location": "ContaSteps.a_conta_criada_para_o_dono_de_numero_com_limite_e_saldo(String,int,Double,Double)"
});
formatter.result({
  "duration": 104917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "ContaSteps.o_dono_realiza_um_deposito_na_conta(Double)"
});
formatter.result({
  "duration": 44380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "ContaSteps.o_dono_realiza_um_saque_na_conta(Double)"
});
formatter.result({
  "duration": 39568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "ContaSteps.o_dono_realiza_um_saque_na_conta(Double)"
});
formatter.result({
  "duration": 39721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 38
    }
  ],
  "location": "ContaSteps.o_dono_tem_o_saldo_no_valor_de(Double)"
});
formatter.result({
  "duration": 47239,
  "status": "passed"
});
});