package cucumberG.cukes.steps

import cucumber.api.DataTable

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Given(~"I have (\\d+) (\\w+) in my belly") { int number, String what ->
    System.out.println(number + " " + what)
}

Given(~"a big basket with cukes") { ->
    System.out.println("A big basket with cukes")
}

Then(~"I should be (\\w+)") {String modo ->
    System.out.println("I'm " + modo)
}

Given(~"the following table:") {DataTable table ->
    System.out.println(table)
}

Given(~"I see these colors") {DataTable table ->
    System.out.println("DataTable:\n" + table)

    List<String> colors = table.asList(String.class)
    System.out.println("List:\n" + colors)
}

Given(~/^today's date is "([^"]*)" and tomorrow is:$/) {String string1, String string2 ->
    System.out.println(string1 + " / " + string2)
}

When(~/^set world property "([^"]*)"$/) {String string ->
    System.out.println(string)
}

Then(~/^world property is "([^"]*)"$/) {String string ->
    System.out.println(string)
}

When(~/^world method call$/) { ->
    System.out.println("world method call")
}

And(~/^world method call:$/) {DataTable table ->
    System.out.println(table)
}

Then(~/^world method call is:$/) {DataTable table ->
    System.out.println(table)
}

And(~/^properties visibility is ok$/) { ->
    System.out.println "properties visibility is ok"
}
