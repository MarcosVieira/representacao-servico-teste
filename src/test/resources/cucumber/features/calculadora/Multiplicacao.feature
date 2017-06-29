# language: en
@Calculadora
Feature: Multiplicacao
  Para evitar erros, os caixas devem poder calcular frações

  Scenario: Resultado com parte decimal para operando com parte decimal
    Given que foi informado 5.5 para a calculadora
    And que foi informado 3 para a calculadora
    When eu peço para ser feita a multiplicação
    Then o resultado calculado deverá ser 16.5

  Scenario: Resultado inteiro para operando com parte decimal
    Given que foi informado 6.5 para a calculadora
    And que foi informado 2 para a calculadora
    When eu peço para ser feita a multiplicação
    Then o resultado calculado deverá ser 13

  Scenario: Resultado inteiro para operandos inteiros
    Given que foi informado 4 para a calculadora
    And que foi informado 3 para a calculadora
    When eu peço para ser feita a multiplicação
    Then o resultado calculado deverá ser 12
