$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/features/cukes/Cukes.feature");
formatter.feature({
  "line": 2,
  "name": "Cucumber Runner Rocks",
  "description": "",
  "id": "cucumber-runner-rocks",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Cukes"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Many cukes",
  "description": "",
  "id": "cucumber-runner-rocks;many-cukes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have 12 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a big basket with cukes",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 7
    },
    {
      "val": "cukes",
      "offset": 10
    }
  ],
  "location": "CukesSteps.groovy:8"
});
formatter.result({
  "duration": 8258225,
  "status": "passed"
});
formatter.match({
  "location": "CukesSteps.groovy:12"
});
formatter.result({
  "duration": 73753,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Few cukes",
  "description": "",
  "id": "cucumber-runner-rocks;few-cukes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have 3 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have 5 cukes in my belly",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 7
    },
    {
      "val": "cukes",
      "offset": 9
    }
  ],
  "location": "CukesSteps.groovy:8"
});
formatter.result({
  "duration": 86049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    },
    {
      "val": "cukes",
      "offset": 9
    }
  ],
  "location": "CukesSteps.groovy:8"
});
formatter.result({
  "duration": 47806,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Various things",
  "description": "",
  "id": "cucumber-runner-rocks;various-things",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I have \u003cn\u003e \u003cwhat\u003e in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should be \u003cmood\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "some cukes",
  "description": "",
  "id": "cucumber-runner-rocks;various-things;some-cukes",
  "rows": [
    {
      "cells": [
        "n",
        "what",
        "mood"
      ],
      "line": 17,
      "id": "cucumber-runner-rocks;various-things;some-cukes;1"
    },
    {
      "cells": [
        "13",
        "cukes",
        "happy"
      ],
      "line": 18,
      "id": "cucumber-runner-rocks;various-things;some-cukes;2"
    },
    {
      "cells": [
        "4",
        "apples",
        "tired"
      ],
      "line": 19,
      "id": "cucumber-runner-rocks;various-things;some-cukes;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Various things",
  "description": "",
  "id": "cucumber-runner-rocks;various-things;some-cukes;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Cukes"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I have 13 cukes in my belly",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should be happy",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 7
    },
    {
      "val": "cukes",
      "offset": 10
    }
  ],
  "location": "CukesSteps.groovy:8"
});
formatter.result({
  "duration": 92291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "happy",
      "offset": 12
    }
  ],
  "location": "CukesSteps.groovy:16"
});
formatter.result({
  "duration": 122042,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Various things",
  "description": "",
  "id": "cucumber-runner-rocks;various-things;some-cukes;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Cukes"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I have 4 apples in my belly",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should be tired",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    },
    {
      "val": "apples",
      "offset": 9
    }
  ],
  "location": "CukesSteps.groovy:8"
});
formatter.result({
  "duration": 86804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tired",
      "offset": 12
    }
  ],
  "location": "CukesSteps.groovy:16"
});
formatter.result({
  "duration": 48924,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "a table",
  "description": "",
  "id": "cucumber-runner-rocks;a-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "the following table:",
  "rows": [
    {
      "cells": [
        "year",
        "name"
      ],
      "line": 23
    },
    {
      "cells": [
        "2008",
        "Cucumber"
      ],
      "line": 24
    },
    {
      "cells": [
        "2012",
        "Cucumber-JVM"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CukesSteps.groovy:20"
});
formatter.result({
  "duration": 1207080,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "see colors",
  "description": "",
  "id": "cucumber-runner-rocks;see-colors",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I see these colors:",
  "rows": [
    {
      "cells": [
        "RED"
      ],
      "line": 29
    },
    {
      "cells": [
        "YELLOW"
      ],
      "line": 30
    },
    {
      "cells": [
        "BLUE"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I see these colors:",
  "rows": [
    {
      "cells": [
        "color"
      ],
      "line": 33
    },
    {
      "cells": [
        "green"
      ],
      "line": 34
    },
    {
      "cells": [
        "orange"
      ],
      "line": 35
    },
    {
      "cells": [
        "black"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CukesSteps.groovy:24"
});
formatter.result({
  "duration": 475507,
  "status": "passed"
});
formatter.match({
  "location": "CukesSteps.groovy:24"
});
formatter.result({
  "duration": 160727,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "A date",
  "description": "",
  "id": "cucumber-runner-rocks;a-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "today\u0027s date is \"1971-10-03\" and tomorrow is:",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 40,
    "value": "1971-10-04"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1971-10-03",
      "offset": 17
    }
  ],
  "location": "CukesSteps.groovy:31"
});
formatter.result({
  "duration": 192873,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Call a method or property from second world",
  "description": "",
  "id": "cucumber-runner-rocks;call-a-method-or-property-from-second-world",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "set world property \"Hello\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "world property is \"Hello\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "world method call",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "world method call:",
  "rows": [
    {
      "cells": [
        "1"
      ],
      "line": 49
    },
    {
      "cells": [
        "2"
      ],
      "line": 50
    },
    {
      "cells": [
        "3"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "world method call is:",
  "rows": [
    {
      "cells": [
        "1"
      ],
      "line": 53
    },
    {
      "cells": [
        "2"
      ],
      "line": 54
    },
    {
      "cells": [
        "3"
      ],
      "line": 55
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "properties visibility is ok",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 20
    }
  ],
  "location": "CukesSteps.groovy:35"
});
formatter.result({
  "duration": 105223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 19
    }
  ],
  "location": "CukesSteps.groovy:39"
});
formatter.result({
  "duration": 74370,
  "status": "passed"
});
formatter.match({
  "location": "CukesSteps.groovy:43"
});
formatter.result({
  "duration": 71713,
  "status": "passed"
});
formatter.match({
  "location": "CukesSteps.groovy:47"
});
formatter.result({
  "duration": 133144,
  "status": "passed"
});
formatter.match({
  "location": "CukesSteps.groovy:51"
});
formatter.result({
  "duration": 78688,
  "status": "passed"
});
formatter.match({
  "location": "CukesSteps.groovy:55"
});
formatter.result({
  "duration": 89311,
  "status": "passed"
});
});