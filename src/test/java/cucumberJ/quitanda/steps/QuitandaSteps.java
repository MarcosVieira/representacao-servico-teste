package cucumberJ.quitanda.steps;

import exemplos.quitanda.Produto;
import exemplos.quitanda.Quitanda;
import exemplos.quitanda.QuitandaBuilder;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class QuitandaSteps {

    private Quitanda quitanda;
    private int estoqueMinimo;

    @Given("^que a quitanda é do \"([^\"]*)\"$")
    public void que_a_quitanda_é_do(String nome, List<Produto> produtos) throws Throwable {
        quitanda = new QuitandaBuilder()
                .comNome(nome)
                .comProdutos(produtos)
                .criar();
    }

    @When("^pedir a relação dos produtos com estoque abaixo de (\\d+)$")
    public void pedir_a_relação_dos_produtos_com_estoque_abaixo_de(Integer estoqueLimite) throws Throwable {
        this.estoqueMinimo = estoqueLimite;
    }

    @Then("^a quantidade de produtos será (\\d+)$")
    public void a_quantidade_de_produtos_será(Integer quantidadeProdutosEsperado) throws Throwable {
        assertThat(quitanda.getProdutos().size()).isEqualTo(quantidadeProdutosEsperado);
    }

    @Then("^a quantidade de itens será (\\d+)$")
    public void a_quantidade_de_itens_será(Integer quantidadeItensEsperado) throws Throwable {
        assertThat(quitanda.obterQuantidadeItens()).isEqualTo(quantidadeItensEsperado);
    }

    @Then("^o total dos itens será R\\$ (.*)$")
    public void o_total_dos_itens_será_R$(Double totalQuitandaEsperado) throws Throwable {
        assertThat(quitanda.obterTotalItens()).isEqualTo(totalQuitandaEsperado);
    }

    @Then("^deverá ser mostrada a relação \"([^\"]*)\"$")
    public void deverá_ser_mostrada_a_relação(String relacaoProduto) throws Throwable {
        assertThat(quitanda.obterRelacaoProdutoAbaixoEstoqueMinimo(this.estoqueMinimo)).isEqualTo(relacaoProduto);
    }

}
