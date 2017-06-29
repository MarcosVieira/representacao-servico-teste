package cucumberJ.quitanda.steps;

import exemplos.quitanda.Produto;
import exemplos.quitanda.ProdutoBuilder;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.assertj.core.api.Assertions.assertThat;

public class ProdutoSteps {

    private Produto produto;
    private boolean seVendaFeita;

    @Given("^foi criado o produto \"([^\"]*)\" de número (\\d+) com preço (.*) e estoque (\\d+)$")
    public void foi_criado_o_produto_de_número_com_preço_e_estoque(String descricao, Integer numero, Double preco, Integer estoque) throws Throwable {
        this.produto = new ProdutoBuilder()
                .comNumero(numero)
                .comDescricao(descricao)
                .comPreco(preco)
                .comQuantidadeEstoque(estoque)
                .criar();
    }

    @When("^solicita a venda de (\\d+) do produto$")
    public void solicita_a_venda_de_do_produto(Integer venda) throws Throwable {
        this.seVendaFeita = this.produto.vender(venda);
    }

    @When("^é feita uma reposição de (\\d+) do produto$")
    public void é_feita_uma_reposição_de_do_produto(Integer reposicao) throws Throwable {
        this.produto.repor(reposicao);
    }

    @Then("^a venda é realizada$")
    public void a_venda_é_realizada() throws Throwable {
        assertThat(this.seVendaFeita).isTrue();
    }

    @Then("^a venda não é realizada$")
    public void a_venda_não_é_realizada() throws Throwable {
        assertThat(this.seVendaFeita).isFalse();
    }

    @Then("^o estoque do produto fica (\\d+)$")
    public void o_estoque_do_produto_fica(Integer quantidadeEstoqueEsperado) throws Throwable {
        assertThat(this.produto.getQuantidadeEstoque()).isEqualTo(quantidadeEstoqueEsperado);
    }

    @Then("^a quantidade vendida é (\\d+)$")
    public void a_quantidade_vendida_é(Integer quantidadeVendidaEsperado) throws Throwable {
        assertThat(this.produto.getQuantidadeVendida()).isEqualTo(quantidadeVendidaEsperado);
    }

    @Then("^e o total das vendas do produto será de (.*)$")
    public void e_o_total_das_vendas_do_produto_será_de(Double totalVendasEsperado) throws Throwable {
        assertThat(this.produto.getQuantidadeVendida() * this.produto.getPreco()).isEqualTo(totalVendasEsperado);
    }

}
