# language: en
@Quitanda
Feature: Testar as operações de montagem de pedidos de produtos

Background: Adiciona os produtos para a quitanda
  Given que a quitanda é do "Zé das Couves"
    | descricao     | numero | preco | quantidadeEstoque |
    | pepino kg     | 111    | 3.50  | 10                |
    | pimentao kg   | 123    | 5.00  | 08                |
    | gengibre kg   | 231    | 3.00  | 06                |
    | cebola kg     | 222    | 2.50  | 10                |
    | quiabo kg     | 333    | 1.80  | 15                |
    | manga und     | 321    | 0.50  | 50                |
    | maçã fuji und | 231    | 0.60  | 30                |
    | maçã gala und | 232    | 0.70  | 20                |

Scenario: Verifica a quantidade de produtos na quitanda
  Then a quantidade de produtos será 8

Scenario: Verifica o inventário na quitanda
  Then a quantidade de itens será 149
  And o total dos itens será R$ 202.00

Scenario: Encontra produtos com estoque mínimo
  When pedir a relação dos produtos com estoque abaixo de 10
  Then deverá ser mostrada a relação "123,231"

