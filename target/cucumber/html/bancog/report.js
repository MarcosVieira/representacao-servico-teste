$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/banco/Banco.feature");
formatter.feature({
  "line": 2,
  "name": "Testar as operacoes básicas de banco",
  "description": "O sistema deve prover operações básicas de banco de forma correta.",
  "id": "testar-as-operacoes-básicas-de-banco",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Banco"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Cria todas as contas e associa ao banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que as contas são do \"Banco do Brasil\"",
  "rows": [
    {
      "cells": [
        "dono",
        "numero",
        "saldo",
        "limite"
      ],
      "line": 7
    },
    {
      "cells": [
        "Abias Corpus Da Silva",
        "111",
        "100",
        "1000"
      ],
      "line": 8
    },
    {
      "cells": [
        "Antônio Morrendo das Dores",
        "222",
        "200",
        "1200"
      ],
      "line": 9
    },
    {
      "cells": [
        "Carabino Tiro Certo",
        "333",
        "300",
        "1300"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Banco do Brasil",
      "offset": 22
    }
  ],
  "location": "BancoSteps.groovy:20"
});
formatter.result({
  "duration": 5098542,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verifica a quantidade de contas criadas",
  "description": "",
  "id": "testar-as-operacoes-básicas-de-banco;verifica-a-quantidade-de-contas-criadas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "no banco \"Banco do Brasil\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "a quantidade de contas é 3",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Banco do Brasil",
      "offset": 10
    }
  ],
  "location": "BancoSteps.groovy:29"
});
formatter.result({
  "duration": 2166834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "BancoSteps.groovy:33"
});
formatter.result({
  "duration": 581294,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria todas as contas e associa ao banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que as contas são do \"Banco do Brasil\"",
  "rows": [
    {
      "cells": [
        "dono",
        "numero",
        "saldo",
        "limite"
      ],
      "line": 7
    },
    {
      "cells": [
        "Abias Corpus Da Silva",
        "111",
        "100",
        "1000"
      ],
      "line": 8
    },
    {
      "cells": [
        "Antônio Morrendo das Dores",
        "222",
        "200",
        "1200"
      ],
      "line": 9
    },
    {
      "cells": [
        "Carabino Tiro Certo",
        "333",
        "300",
        "1300"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Banco do Brasil",
      "offset": 22
    }
  ],
  "location": "BancoSteps.groovy:20"
});
formatter.result({
  "duration": 543322,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verifica o total de dinheiro no banco",
  "description": "",
  "id": "testar-as-operacoes-básicas-de-banco;verifica-o-total-de-dinheiro-no-banco",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "o cálculo do total de dinheiro",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "o total de dinheiro no banco é 600",
  "keyword": "Then "
});
formatter.match({
  "location": "BancoSteps.groovy:37"
});
formatter.result({
  "duration": 2545446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 31
    }
  ],
  "location": "BancoSteps.groovy:42"
});
formatter.result({
  "duration": 236957,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria todas as contas e associa ao banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que as contas são do \"Banco do Brasil\"",
  "rows": [
    {
      "cells": [
        "dono",
        "numero",
        "saldo",
        "limite"
      ],
      "line": 7
    },
    {
      "cells": [
        "Abias Corpus Da Silva",
        "111",
        "100",
        "1000"
      ],
      "line": 8
    },
    {
      "cells": [
        "Antônio Morrendo das Dores",
        "222",
        "200",
        "1200"
      ],
      "line": 9
    },
    {
      "cells": [
        "Carabino Tiro Certo",
        "333",
        "300",
        "1300"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Banco do Brasil",
      "offset": 22
    }
  ],
  "location": "BancoSteps.groovy:20"
});
formatter.result({
  "duration": 472098,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cliente com maior saldo no banco",
  "description": "",
  "id": "testar-as-operacoes-básicas-de-banco;cliente-com-maior-saldo-no-banco",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "o cálculo do cliente com maior saldo",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "o nome do cliente com maior saldo é \"Carabino Tiro Certo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "o saldo da conta com maior saldo é 300",
  "keyword": "And "
});
formatter.match({
  "location": "BancoSteps.groovy:46"
});
formatter.result({
  "duration": 2268805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carabino Tiro Certo",
      "offset": 37
    }
  ],
  "location": "BancoSteps.groovy:52"
});
formatter.result({
  "duration": 579290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 35
    }
  ],
  "location": "BancoSteps.groovy:56"
});
formatter.result({
  "duration": 174178,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria todas as contas e associa ao banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que as contas são do \"Banco do Brasil\"",
  "rows": [
    {
      "cells": [
        "dono",
        "numero",
        "saldo",
        "limite"
      ],
      "line": 7
    },
    {
      "cells": [
        "Abias Corpus Da Silva",
        "111",
        "100",
        "1000"
      ],
      "line": 8
    },
    {
      "cells": [
        "Antônio Morrendo das Dores",
        "222",
        "200",
        "1200"
      ],
      "line": 9
    },
    {
      "cells": [
        "Carabino Tiro Certo",
        "333",
        "300",
        "1300"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Banco do Brasil",
      "offset": 22
    }
  ],
  "location": "BancoSteps.groovy:20"
});
formatter.result({
  "duration": 959159,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Cliente com menor saldo no banco",
  "description": "",
  "id": "testar-as-operacoes-básicas-de-banco;cliente-com-menor-saldo-no-banco",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "o cálculo do cliente com menor saldo",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "o nome do cliente com menor saldo é \"Abias Corpus Da Silva\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "o saldo da conta com menor saldo é 100",
  "keyword": "And "
});
formatter.match({
  "location": "BancoSteps.groovy:60"
});
formatter.result({
  "duration": 1000140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abias Corpus Da Silva",
      "offset": 37
    }
  ],
  "location": "BancoSteps.groovy:66"
});
formatter.result({
  "duration": 235482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 35
    }
  ],
  "location": "BancoSteps.groovy:70"
});
formatter.result({
  "duration": 152197,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Cria todas as contas e associa ao banco",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "que as contas são do \"Banco do Brasil\"",
  "rows": [
    {
      "cells": [
        "dono",
        "numero",
        "saldo",
        "limite"
      ],
      "line": 7
    },
    {
      "cells": [
        "Abias Corpus Da Silva",
        "111",
        "100",
        "1000"
      ],
      "line": 8
    },
    {
      "cells": [
        "Antônio Morrendo das Dores",
        "222",
        "200",
        "1200"
      ],
      "line": 9
    },
    {
      "cells": [
        "Carabino Tiro Certo",
        "333",
        "300",
        "1300"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Banco do Brasil",
      "offset": 22
    }
  ],
  "location": "BancoSteps.groovy:20"
});
formatter.result({
  "duration": 470205,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Contas com saldo acima de um valor",
  "description": "",
  "id": "testar-as-operacoes-básicas-de-banco;contas-com-saldo-acima-de-um-valor",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "o cálculo das contas com saldo igual ou acima de 200",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "a relação das contas é \"222,333\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 49
    }
  ],
  "location": "BancoSteps.groovy:74"
});
formatter.result({
  "duration": 768120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222,333",
      "offset": 24
    }
  ],
  "location": "BancoSteps.groovy:78"
});
formatter.result({
  "duration": 1156984,
  "status": "passed"
});
});