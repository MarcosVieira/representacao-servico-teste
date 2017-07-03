$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/geometria/Geometria.feature");
formatter.feature({
  "line": 2,
  "name": "Cálculo de área e perímetro de formas geométricas",
  "description": "",
  "id": "cálculo-de-área-e-perímetro-de-formas-geométricas",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Geometria"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Cálculo do perímetro do quadrado",
  "description": "",
  "id": "cálculo-de-área-e-perímetro-de-formas-geométricas;cálculo-do-perímetro-do-quadrado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "que o quadrado tem lado de 5.1 \"cm\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o cálculo do perímetro do quadrado deve dar 20.4 \"cm\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5.1",
      "offset": 27
    },
    {
      "val": "cm",
      "offset": 32
    }
  ],
  "location": "GeometriaSteps.groovy:17"
});
formatter.result({
  "duration": 8639819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20.4",
      "offset": 44
    },
    {
      "val": "cm",
      "offset": 50
    }
  ],
  "location": "GeometriaSteps.groovy:25"
});
formatter.result({
  "duration": 1394830,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Cálculo da área do quadrado",
  "description": "",
  "id": "cálculo-de-área-e-perímetro-de-formas-geométricas;cálculo-da-área-do-quadrado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "que o quadrado tem lado de 5 \"cm\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "o cálculo da área do quadrado deve dar 25 \"cm2\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 27
    },
    {
      "val": "cm",
      "offset": 30
    }
  ],
  "location": "GeometriaSteps.groovy:17"
});
formatter.result({
  "duration": 143387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 39
    },
    {
      "val": "cm2",
      "offset": 43
    }
  ],
  "location": "GeometriaSteps.groovy:30"
});
formatter.result({
  "duration": 1674276,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Cálculo do perímetro do retângulo",
  "description": "",
  "id": "cálculo-de-área-e-perímetro-de-formas-geométricas;cálculo-do-perímetro-do-retângulo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "que o retângulo tem um lado de 3 e outro de 4 \"cm\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "o cálculo do perímetro do retângulo deve dar 14 \"cm\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "4",
      "offset": 44
    },
    {
      "val": "cm",
      "offset": 47
    }
  ],
  "location": "GeometriaSteps.groovy:21"
});
formatter.result({
  "duration": 5281391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 45
    },
    {
      "val": "cm",
      "offset": 49
    }
  ],
  "location": "GeometriaSteps.groovy:35"
});
formatter.result({
  "duration": 959641,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Cálculo da área do retângulo",
  "description": "",
  "id": "cálculo-de-área-e-perímetro-de-formas-geométricas;cálculo-da-área-do-retângulo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "que o retângulo tem um lado de 5 e outro de 4 \"cm\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "o cálculo da área do retângulo deve dar 20 \"cm2\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "4",
      "offset": 44
    },
    {
      "val": "cm",
      "offset": 47
    }
  ],
  "location": "GeometriaSteps.groovy:21"
});
formatter.result({
  "duration": 153378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 40
    },
    {
      "val": "cm2",
      "offset": 44
    }
  ],
  "location": "GeometriaSteps.groovy:40"
});
formatter.result({
  "duration": 806878,
  "status": "passed"
});
});