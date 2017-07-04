$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/quitanda/Quitanda.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: en"
    }
  ],
  "line": 3,
  "name": "Testar as operações de montagem de pedidos de produtos",
  "description": "",
  "id": "testar-as-operações-de-montagem-de-pedidos-de-produtos",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Quitanda"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Adiciona os produtos para a quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que a quitanda é do \"Zé das Couves\"",
  "rows": [
    {
      "cells": [
        "descricao",
        "numero",
        "preco",
        "quantidadeEstoque"
      ],
      "line": 7
    },
    {
      "cells": [
        "pepino kg",
        "111",
        "3.50",
        "10"
      ],
      "line": 8
    },
    {
      "cells": [
        "pimentao kg",
        "123",
        "5.00",
        "08"
      ],
      "line": 9
    },
    {
      "cells": [
        "gengibre kg",
        "231",
        "3.00",
        "06"
      ],
      "line": 10
    },
    {
      "cells": [
        "cebola kg",
        "222",
        "2.50",
        "10"
      ],
      "line": 11
    },
    {
      "cells": [
        "quiabo kg",
        "333",
        "1.80",
        "15"
      ],
      "line": 12
    },
    {
      "cells": [
        "manga und",
        "321",
        "0.50",
        "50"
      ],
      "line": 13
    },
    {
      "cells": [
        "maçã fuji und",
        "231",
        "0.60",
        "30"
      ],
      "line": 14
    },
    {
      "cells": [
        "maçã gala und",
        "232",
        "0.70",
        "20"
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Zé das Couves",
      "offset": 21
    }
  ],
  "location": "QuitandaSteps.groovy:16"
});
formatter.result({
  "duration": 29045778,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verifica a quantidade de produtos na quitanda",
  "description": "",
  "id": "testar-as-operações-de-montagem-de-pedidos-de-produtos;verifica-a-quantidade-de-produtos-na-quitanda",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "a quantidade de produtos será 8",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 30
    }
  ],
  "location": "QuitandaSteps.groovy:23"
});
formatter.result({
  "duration": 929849,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Adiciona os produtos para a quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que a quitanda é do \"Zé das Couves\"",
  "rows": [
    {
      "cells": [
        "descricao",
        "numero",
        "preco",
        "quantidadeEstoque"
      ],
      "line": 7
    },
    {
      "cells": [
        "pepino kg",
        "111",
        "3.50",
        "10"
      ],
      "line": 8
    },
    {
      "cells": [
        "pimentao kg",
        "123",
        "5.00",
        "08"
      ],
      "line": 9
    },
    {
      "cells": [
        "gengibre kg",
        "231",
        "3.00",
        "06"
      ],
      "line": 10
    },
    {
      "cells": [
        "cebola kg",
        "222",
        "2.50",
        "10"
      ],
      "line": 11
    },
    {
      "cells": [
        "quiabo kg",
        "333",
        "1.80",
        "15"
      ],
      "line": 12
    },
    {
      "cells": [
        "manga und",
        "321",
        "0.50",
        "50"
      ],
      "line": 13
    },
    {
      "cells": [
        "maçã fuji und",
        "231",
        "0.60",
        "30"
      ],
      "line": 14
    },
    {
      "cells": [
        "maçã gala und",
        "232",
        "0.70",
        "20"
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Zé das Couves",
      "offset": 21
    }
  ],
  "location": "QuitandaSteps.groovy:16"
});
formatter.result({
  "duration": 1750908,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verifica o inventário na quitanda",
  "description": "",
  "id": "testar-as-operações-de-montagem-de-pedidos-de-produtos;verifica-o-inventário-na-quitanda",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "a quantidade de itens será 149",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "o total dos itens será R$ 202.00",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "149",
      "offset": 27
    }
  ],
  "location": "QuitandaSteps.groovy:29"
});
formatter.result({
  "duration": 16683505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202.00",
      "offset": 26
    }
  ],
  "location": "QuitandaSteps.groovy:35"
});
formatter.result({
  "duration": 37556053,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Adiciona os produtos para a quitanda",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que a quitanda é do \"Zé das Couves\"",
  "rows": [
    {
      "cells": [
        "descricao",
        "numero",
        "preco",
        "quantidadeEstoque"
      ],
      "line": 7
    },
    {
      "cells": [
        "pepino kg",
        "111",
        "3.50",
        "10"
      ],
      "line": 8
    },
    {
      "cells": [
        "pimentao kg",
        "123",
        "5.00",
        "08"
      ],
      "line": 9
    },
    {
      "cells": [
        "gengibre kg",
        "231",
        "3.00",
        "06"
      ],
      "line": 10
    },
    {
      "cells": [
        "cebola kg",
        "222",
        "2.50",
        "10"
      ],
      "line": 11
    },
    {
      "cells": [
        "quiabo kg",
        "333",
        "1.80",
        "15"
      ],
      "line": 12
    },
    {
      "cells": [
        "manga und",
        "321",
        "0.50",
        "50"
      ],
      "line": 13
    },
    {
      "cells": [
        "maçã fuji und",
        "231",
        "0.60",
        "30"
      ],
      "line": 14
    },
    {
      "cells": [
        "maçã gala und",
        "232",
        "0.70",
        "20"
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Zé das Couves",
      "offset": 21
    }
  ],
  "location": "QuitandaSteps.groovy:16"
});
formatter.result({
  "duration": 2280081,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Encontra produtos com estoque mínimo",
  "description": "",
  "id": "testar-as-operações-de-montagem-de-pedidos-de-produtos;encontra-produtos-com-estoque-mínimo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "pedir a relação dos produtos com estoque abaixo de 10",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "deverá ser mostrada a relação \"123,231\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "QuitandaSteps.groovy:41"
});
formatter.result({
  "duration": 153949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123,231",
      "offset": 31
    }
  ],
  "location": "QuitandaSteps.groovy:47"
});
formatter.result({
  "duration": 74469216,
  "status": "passed"
});
});