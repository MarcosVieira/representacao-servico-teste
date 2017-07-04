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
  "duration": 2386408,
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
  "duration": 128496,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_é_realizada()"
});
formatter.result({
  "duration": 79233,
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
  "duration": 135064,
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
  "duration": 126033,
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
  "duration": 286960,
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
  "duration": 104274,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_não_é_realizada()"
});
formatter.result({
  "duration": 81696,
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
  "duration": 346897,
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
  "duration": 100579,
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
  "duration": 362908,
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
  "duration": 107969,
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
  "duration": 92780,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_é_realizada()"
});
formatter.result({
  "duration": 39821,
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
  "duration": 84158,
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
  "duration": 55011,
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
  "duration": 1559191,
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
  "duration": 102221,
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
  "duration": 81285,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.a_venda_não_é_realizada()"
});
formatter.result({
  "duration": 38179,
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
  "duration": 66506,
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
  "duration": 55422,
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
  "duration": 395750,
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
  "duration": 411350,
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
  "duration": 101401,
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
  "duration": 95653,
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
  "duration": 97296,
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
  "duration": 91548,
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
  "duration": 88264,
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
  "duration": 432698,
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
  "duration": 328013,
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
  "duration": 189254,
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
  "duration": 82106,
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
  "duration": 78411,
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
  "duration": 65274,
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
  "duration": 96474,
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
  "duration": 148612,
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
  "duration": 86211,
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
  "duration": 228665,
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
  "duration": 8279147,
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
  "duration": 116180,
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
  "duration": 91138,
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
  "duration": 94422,
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
  "duration": 106737,
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
  "duration": 149022,
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
  "duration": 124391,
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
  "duration": 262739,
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
  "duration": 239749,
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
  "duration": 1241852,
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
  "duration": 109611,
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
  "duration": 99349,
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
  "duration": 105096,
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
  "duration": 80464,
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
  "duration": 115359,
  "status": "passed"
});
});