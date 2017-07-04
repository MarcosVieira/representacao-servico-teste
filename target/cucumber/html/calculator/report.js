$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/calculator/Division.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: en"
    }
  ],
  "line": 3,
  "name": "Division",
  "description": "In order to avoid silly mistakes\r\nCashiers must be able to calculate a fraction",
  "id": "division",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Calculator"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Regular numbers",
  "description": "",
  "id": "division;regular-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@important"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have entered 3 into the calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have entered 2 into the calculator",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press divide",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the stored result should be 1.5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "CalculatorSteps.groovy:11"
});
formatter.result({
  "duration": 3152044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "CalculatorSteps.groovy:11"
});
formatter.result({
  "duration": 137938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divide",
      "offset": 8
    }
  ],
  "location": "CalculatorSteps.groovy:15"
});
formatter.result({
  "duration": 460614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.5",
      "offset": 28
    }
  ],
  "location": "CalculatorSteps.groovy:19"
});
formatter.result({
  "duration": 1937699,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "More numbers",
  "description": "",
  "id": "division;more-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I have entered 6 into the calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I have entered 3 into the calculator",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I press divide",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the stored result should be 2.0",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 15
    }
  ],
  "location": "CalculatorSteps.groovy:11"
});
formatter.result({
  "duration": 259454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "CalculatorSteps.groovy:11"
});
formatter.result({
  "duration": 176938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divide",
      "offset": 8
    }
  ],
  "location": "CalculatorSteps.groovy:15"
});
formatter.result({
  "duration": 229897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.0",
      "offset": 28
    }
  ],
  "location": "CalculatorSteps.groovy:19"
});
formatter.result({
  "duration": 174475,
  "status": "passed"
});
});