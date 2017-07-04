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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 2961149,
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
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 137938,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_é_realizada()"
});
formatter.result({
  "duration": 57885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 147791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 121927,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 296813,
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
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 117822,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_não_é_realizada()"
});
formatter.result({
  "duration": 53779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 119054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 110433,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 285318,
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
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 1748035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 152306,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_é_realizada()"
});
formatter.result({
  "duration": 43106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 105096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 243855,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 2225891,
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
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 110022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 109612,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_não_é_realizada()"
});
formatter.result({
  "duration": 44338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 123159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 106738,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 390414,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 337455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 1035766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 112075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.é_feita_uma_reposição_de_do_produto(Integer)"
});
formatter.result({
  "duration": 117822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 119875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 119054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24.50",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.e_o_total_das_vendas_do_produto_será_de(Double)"
});
formatter.result({
  "duration": 189664,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 281213,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 258223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 75127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 69789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.é_feita_uma_reposição_de_do_produto(Integer)"
});
formatter.result({
  "duration": 62401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 91959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 83748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40.00",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.e_o_total_das_vendas_do_produto_será_de(Double)"
});
formatter.result({
  "duration": 116590,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 301329,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 659310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 83338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 80053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.é_feita_uma_reposição_de_do_produto(Integer)"
});
formatter.result({
  "duration": 105917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 105506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 90727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.00",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.e_o_total_das_vendas_do_produto_será_de(Double)"
});
formatter.result({
  "duration": 215528,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 296403,
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
  "location": "ProdutoSteps.foi_criado_o_produto_de_número_com_preço_e_estoque(String,Integer,Double,Integer)"
});
formatter.result({
  "duration": 279570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 88674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "ProdutoSteps.solicita_a_venda_de_do_produto(Integer)"
});
formatter.result({
  "duration": 80874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "ProdutoSteps.é_feita_uma_reposição_de_do_produto(Integer)"
});
formatter.result({
  "duration": 80053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 26
    }
  ],
  "location": "ProdutoSteps.o_estoque_do_produto_fica(Integer)"
});
formatter.result({
  "duration": 99348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "ProdutoSteps.a_quantidade_vendida_é(Integer)"
});
formatter.result({
  "duration": 81285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00.00",
      "offset": 40
    }
  ],
  "location": "ProdutoSteps.e_o_total_das_vendas_do_produto_será_de(Double)"
});
formatter.result({
  "duration": 84158,
  "status": "passed"
});
});