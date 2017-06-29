# language: en
@Calculadora
Feature: Operações básicas entre dois números

  Scenario: Adiciona dois números
    Given que foi informado "2+2"
    When for executada a operação
    Then o resultado deverá ser "4"

  Scenario: Subtrai dois números
    Given que foi informado "9-4"
    When for executada a operação
    Then o resultado deverá ser "5"

  Scenario: Subtração
    When Eu subtraio 5 de 9
    Then O resultado é 4

