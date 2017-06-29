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
  "location": "QuitandaSteps.groovy:18"
});
formatter.result({
  "duration": 8903155,
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
  "location": "QuitandaSteps.groovy:25"
});
formatter.result({
  "duration": 39299237,
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
  "location": "QuitandaSteps.groovy:18"
});
formatter.result({
  "duration": 1649733,
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
  "location": "QuitandaSteps.groovy:31"
});
formatter.result({
  "duration": 779644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202.00",
      "offset": 26
    }
  ],
  "location": "QuitandaSteps.groovy:37"
});
formatter.result({
  "duration": 5226817,
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
  "location": "QuitandaSteps.groovy:18"
});
formatter.result({
  "duration": 1107277,
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
  "location": "QuitandaSteps.groovy:43"
});
formatter.result({
  "duration": 78982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123,231",
      "offset": 31
    }
  ],
  "location": "QuitandaSteps.groovy:49"
});
formatter.result({
  "duration": 4962302,
  "status": "passed"
});
});