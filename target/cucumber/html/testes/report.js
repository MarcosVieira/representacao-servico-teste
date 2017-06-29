$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/calculadoraromana/Testes.feature");
formatter.feature({
  "line": 2,
  "name": "Testar as opções de criar definições de passos",
  "description": "",
  "id": "testar-as-opções-de-criar-definições-de-passos",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Testes"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verificar o casamento dos padrões na definição de passos",
  "description": "",
  "id": "testar-as-opções-de-criar-definições-de-passos;verificar-o-casamento-dos-padrões-na-definição-de-passos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Eu tenho um pepino",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Eu tenho 15 bananas prata na minha cesta",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Eu tenho uma banana prata na minha cesta",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Eu tenho uma banana maça na minha cesta",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Eu tenho uma banana nanica na minha cesta",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Eu tenho uma manga rosa na minha cesta",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Eu tenho uma manga coquinho na minha cesta",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Eu tenho uma manga espada na minha cesta",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Eu tenho um pedido",
  "rows": [
    {
      "cells": [
        "descricao",
        "quantidade",
        "valor"
      ],
      "line": 14
    },
    {
      "cells": [
        "pepino",
        "4",
        "1.10"
      ],
      "line": 15
    },
    {
      "cells": [
        "mandioca",
        "5",
        "2.20"
      ],
      "line": 16
    },
    {
      "cells": [
        "beringela",
        "6",
        "4.40"
      ],
      "line": 17
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Pedir o cálculo do total do pedido",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Deverá resultar em $ 41.80",
  "keyword": "Then "
});
formatter.match({
  "location": "TestesSteps.eu_tenho_um_pepino()"
});
formatter.result({
  "duration": 1203360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    },
    {
      "val": "bananas prata",
      "offset": 12
    }
  ],
  "location": "TestesSteps.eu_tenho_na_minha_cesta(int,String)"
});
formatter.result({
  "duration": 348145,
  "status": "passed"
});
formatter.match({
  "location": "TestesSteps.eu_tenho_uma_banana_na_minha_cesta()"
});
formatter.result({
  "duration": 28835,
  "status": "passed"
});
formatter.match({
  "location": "TestesSteps.eu_tenho_uma_banana_na_minha_cesta()"
});
formatter.result({
  "duration": 23338,
  "status": "passed"
});
formatter.match({
  "location": "TestesSteps.eu_tenho_uma_banana_na_minha_cesta()"
});
formatter.result({
  "duration": 22498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rosa",
      "offset": 19
    }
  ],
  "location": "TestesSteps.eu_tenho_uma_manga_na_minha_cesta(String)"
});
formatter.result({
  "duration": 57836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coquinho",
      "offset": 19
    }
  ],
  "location": "TestesSteps.eu_tenho_uma_manga_na_minha_cesta(String)"
});
formatter.result({
  "duration": 43790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "espada",
      "offset": 19
    }
  ],
  "location": "TestesSteps.eu_tenho_uma_manga_na_minha_cesta(String)"
});
formatter.result({
  "duration": 50298,
  "status": "passed"
});
formatter.match({
  "location": "TestesSteps.eu_tenho_um_pedido(ItemPedido\u003e)"
});
formatter.result({
  "duration": 934936,
  "status": "passed"
});
formatter.match({
  "location": "TestesSteps.pedir_o_calculo_do_total_do_pedido()"
});
formatter.result({
  "duration": 630865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41.80",
      "offset": 21
    }
  ],
  "location": "TestesSteps.devera_ser_mostrado(Double)"
});
formatter.result({
  "duration": 92638,
  "status": "passed"
});
});