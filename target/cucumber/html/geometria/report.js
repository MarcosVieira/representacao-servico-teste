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
  "name": "que o quadrado tem lado de 5 \"cm\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "é feito cálculo do perímetro",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "deve mostrar 20 \"cm\"",
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
  "location": "GeometriaSteps.groovy:12"
});
formatter.result({
  "duration": 5650536,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cucumberG.steps.geometria.GeometriaSteps$_run_closure1.doCall(GeometriaSteps.groovy:14)\n\tat ✽.Given que o quadrado tem lado de 5 \"cm\"(cucumber/features/geometria/Geometria.feature:5)\n",
  "status": "pending"
});
formatter.match({
  "location": "GeometriaSteps.groovy:17"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    },
    {
      "val": "cm",
      "offset": 17
    }
  ],
  "location": "GeometriaSteps.groovy:27"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Cálculo da área do quadrado",
  "description": "",
  "id": "cálculo-de-área-e-perímetro-de-formas-geométricas;cálculo-da-área-do-quadrado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "que o quadrado tem lado de 5 \"cm\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "é feito do cálculo da área",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "deve mostrar 25 \"cm2\"",
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
  "location": "GeometriaSteps.groovy:12"
});
formatter.result({
  "duration": 297197,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cucumberG.steps.geometria.GeometriaSteps$_run_closure1.doCall(GeometriaSteps.groovy:14)\n\tat ✽.Given que o quadrado tem lado de 5 \"cm\"(cucumber/features/geometria/Geometria.feature:10)\n",
  "status": "pending"
});
formatter.match({
  "location": "GeometriaSteps.groovy:22"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 13
    },
    {
      "val": "cm2",
      "offset": 17
    }
  ],
  "location": "GeometriaSteps.groovy:27"
});
formatter.result({
  "status": "skipped"
});
});