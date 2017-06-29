# language: en
@Calculadora
Feature: : Divisão
  Para evitar erros, os caixas devem poder calcular frações

  Scenario: : Resultado com parte decimal
    Given que foi informado 3 para a calculadora
    And que foi informado 2 para a calculadora
    When eu peço para ser feita a divisão
    Then o resultado calculado deverá ser 1.5

  Scenario: Resultado inteiro
    Given que foi informado 6 para a calculadora
    And que foi informado 3 para a calculadora
    When eu peço para ser feita a divisão
    Then o resultado calculado deverá ser 2