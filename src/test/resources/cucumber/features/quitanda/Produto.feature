# language: en
@Produto
Feature: Testar as movimentações básicas sobre um produto na quitanda

Background: Cria um produto na quitanda
  Given foi criado o produto "abacate kg" de número 123 com preço 2.50 e estoque 5

Scenario: Fazer uma venda com produto disponível
  When solicita a venda de 2 do produto
  Then a venda é realizada
  And o estoque do produto fica 3
  And a quantidade vendida é 2

Scenario: Fazer uma venda com produto indisponível
  When solicita a venda de 6 do produto
  Then a venda não é realizada
  And o estoque do produto fica 5
  And a quantidade vendida é 0

Scenario: Fazer sequência de venda com produto disponível
  When solicita a venda de 2 do produto
  And solicita a venda de 3 do produto
  Then a venda é realizada
  And o estoque do produto fica 0
  And a quantidade vendida é 5

Scenario: Fazer sequência de venda com produto indisponível
  When solicita a venda de 3 do produto
  And solicita a venda de 4 do produto
  Then a venda não é realizada
  And o estoque do produto fica 2
  And a quantidade vendida é 3

Scenario Outline: Fazer venda e reposição de produto
  Given foi criado o produto "<descricao>" de número <numero> com preço <preco> e estoque <estoque>
  When solicita a venda de <primeira_venda> do produto
  And solicita a venda de <segunda_venda> do produto
  And é feita uma reposição de <reposicao> do produto
  Then o estoque do produto fica <estoque_esperado>
  And a quantidade vendida é <vendas_esperada>
  And e o total das vendas do produto será de <total_vendas>

  Examples:
      | descricao   | numero | preco | estoque | primeira_venda | segunda_venda | reposicao | estoque_esperado | vendas_esperada | total_vendas |
      | pepino kg   | 111    | 3.50  | 10      | 2              | 5             | 1         | 4                | 7               | 24.50        |
      | pimentao kg | 123    | 5.00  | 08      | 3              | 5             | 1         | 1                | 8               | 40.00        |
      | gengibre kg | 234    | 3.00  | 06      | 4              | 4             | 2         | 4                | 4               | 12.00        |
      | pimenta kg  | 345    | 4.50  | 03      | 5              | 4             | 3         | 6                | 0               | 00.00        |

