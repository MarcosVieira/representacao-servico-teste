@Geometria
Feature: Cálculo de área e perímetro de formas geométricas

Scenario: Cálculo do perímetro do quadrado
  Given que o quadrado tem lado de 5.1 "cm"
  Then o cálculo do perímetro do quadrado deve dar 20.4 "cm"

Scenario: Cálculo da área do quadrado
  Given que o quadrado tem lado de 5 "cm"
  Then o cálculo da área do quadrado deve dar 25 "cm2"

Scenario: Cálculo do perímetro do retângulo
  Given que o retângulo tem um lado de 3 e outro de 4 "cm"
  Then o cálculo do perímetro do retângulo deve dar 14 "cm"

Scenario: Cálculo da área do retângulo
  Given que o retângulo tem um lado de 5 e outro de 4 "cm"
  Then o cálculo da área do retângulo deve dar 20 "cm2"


