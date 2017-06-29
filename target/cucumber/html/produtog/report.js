$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/quitanda/Produto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: en"
    }
  ],
  "line": 3,
  "name": "Testar as movimentações básicas sobre um produto na quitanda",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Produto"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 2960016,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Fazer uma venda com produto disponível",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-uma-venda-com-produto-disponível",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "solicita a venda de 2 do produto",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a venda é realizada",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "o estoque do produto fica 3",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a quantidade vendida é 2",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 522878,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.groovy:37"
});
formatter.result({
  "duration": 3363090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 227468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 463401,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 141860,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Fazer uma venda com produto indisponível",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-uma-venda-com-produto-indisponível",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "solicita a venda de 6 do produto",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "a venda não é realizada",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "o estoque do produto fica 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "a quantidade vendida é 0",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 70819,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.groovy:41"
});
formatter.result({
  "duration": 640424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 68537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 40253,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 119233,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Fazer sequência de venda com produto disponível",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-sequência-de-venda-com-produto-disponível",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "solicita a venda de 2 do produto",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "solicita a venda de 3 do produto",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "a venda é realizada",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "o estoque do produto fica 0",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "a quantidade vendida é 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 46648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 37569,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.groovy:37"
});
formatter.result({
  "duration": 35679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 41739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 52272,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 1224323,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Fazer sequência de venda com produto indisponível",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-sequência-de-venda-com-produto-indisponível",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "solicita a venda de 3 do produto",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "solicita a venda de 4 do produto",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a venda não é realizada",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "o estoque do produto fica 2",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a quantidade vendida é 3",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 89575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 63899,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.groovy:41"
});
formatter.result({
  "duration": 49134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 104152,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Fazer venda e reposição de produto",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "foi criado o produto \"\u003cdescricao\u003e\" de número \u003cnumero\u003e com preço \u003cpreco\u003e e estoque \u003cestoque\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "solicita a venda de \u003cprimeira_venda\u003e do produto",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "solicita a venda de \u003csegunda_venda\u003e do produto",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "é feita uma reposição de \u003creposicao\u003e do produto",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "o estoque do produto fica \u003cestoque_esperado\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "a quantidade vendida é \u003cvendas_esperada\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "e o total das vendas do produto será de \u003ctotal_vendas\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;",
  "rows": [
    {
      "cells": [
        "descricao",
        "numero",
        "preco",
        "estoque",
        "primeira_venda",
        "segunda_venda",
        "reposicao",
        "estoque_esperado",
        "vendas_esperada",
        "total_vendas"
      ],
      "line": 44,
      "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;1"
    },
    {
      "cells": [
        "pepino kg",
        "111",
        "3.50",
        "10",
        "2",
        "5",
        "1",
        "4",
        "7",
        "24.50"
      ],
      "line": 45,
      "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;2"
    },
    {
      "cells": [
        "pimentao kg",
        "123",
        "5.00",
        "08",
        "3",
        "5",
        "1",
        "1",
        "8",
        "40.00"
      ],
      "line": 46,
      "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;3"
    },
    {
      "cells": [
        "gengibre kg",
        "234",
        "3.00",
        "06",
        "4",
        "4",
        "2",
        "4",
        "4",
        "12.00"
      ],
      "line": 47,
      "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;4"
    },
    {
      "cells": [
        "pimenta kg",
        "345",
        "4.50",
        "03",
        "5",
        "4",
        "3",
        "6",
        "0",
        "00.00"
      ],
      "line": 48,
      "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 192441,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Fazer venda e reposição de produto",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Produto"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "foi criado o produto \"pepino kg\" de número 111 com preço 3.50 e estoque 10",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "solicita a venda de 2 do produto",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "solicita a venda de 5 do produto",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "é feita uma reposição de 1 do produto",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "o estoque do produto fica 4",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "a quantidade vendida é 7",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "e o total das vendas do produto será de 24.50",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "pepino kg",
      "offset": 22
    },
    {
      "val": "111",
      "offset": 43
    },
    {
      "val": "3.50",
      "offset": 57
    },
    {
      "val": "10",
      "offset": 72
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 115483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 46329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 37046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.groovy:31"
});
formatter.result({
  "duration": 471357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 56294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 38613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24.50",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.groovy:57"
});
formatter.result({
  "duration": 210968,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 121513,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Fazer venda e reposição de produto",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Produto"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "foi criado o produto \"pimentao kg\" de número 123 com preço 5.00 e estoque 08",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "solicita a venda de 3 do produto",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "solicita a venda de 5 do produto",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "é feita uma reposição de 1 do produto",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "o estoque do produto fica 1",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "a quantidade vendida é 8",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "e o total das vendas do produto será de 40.00",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "pimentao kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 45
    },
    {
      "val": "5.00",
      "offset": 59
    },
    {
      "val": "08",
      "offset": 74
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 127877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 46812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 41205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.groovy:31"
});
formatter.result({
  "duration": 45995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 49717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 43009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40.00",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.groovy:57"
});
formatter.result({
  "duration": 63223,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 124288,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Fazer venda e reposição de produto",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Produto"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "foi criado o produto \"gengibre kg\" de número 234 com preço 3.00 e estoque 06",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "solicita a venda de 4 do produto",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "solicita a venda de 4 do produto",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "é feita uma reposição de 2 do produto",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "o estoque do produto fica 4",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "a quantidade vendida é 4",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "e o total das vendas do produto será de 12.00",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "gengibre kg",
      "offset": 22
    },
    {
      "val": "234",
      "offset": 45
    },
    {
      "val": "3.00",
      "offset": 59
    },
    {
      "val": "06",
      "offset": 74
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 133950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 44084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 31691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.groovy:31"
});
formatter.result({
  "duration": 35225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 53428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 41584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.00",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.groovy:57"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria um produto na quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "foi criado o produto \"abacate kg\" de número 123 com preço 2.50 e estoque 5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "abacate kg",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 44
    },
    {
      "val": "2.50",
      "offset": 58
    },
    {
      "val": "5",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 127478,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Fazer venda e reposição de produto",
  "description": "",
  "id": "testar-as-movimentações-básicas-sobre-um-produto-na-quitanda;fazer-venda-e-reposição-de-produto;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Produto"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "foi criado o produto \"pimenta kg\" de número 345 com preço 4.50 e estoque 03",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "solicita a venda de 5 do produto",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "solicita a venda de 4 do produto",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "é feita uma reposição de 3 do produto",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "o estoque do produto fica 6",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "a quantidade vendida é 0",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "e o total das vendas do produto será de 00.00",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "pimenta kg",
      "offset": 22
    },
    {
      "val": "345",
      "offset": 44
    },
    {
      "val": "4.50",
      "offset": 58
    },
    {
      "val": "03",
      "offset": 73
    }
  ],
  "location": "ProdutoSteps.groovy:14"
});
formatter.result({
  "duration": 119668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 37390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.groovy:25"
});
formatter.result({
  "duration": 39016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.groovy:31"
});
formatter.result({
  "duration": 35637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.groovy:45"
});
formatter.result({
  "duration": 47859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.groovy:51"
});
formatter.result({
  "duration": 60492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00.00",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.groovy:57"
});
formatter.result({
  "duration": 43698,
  "status": "passed"
});
});