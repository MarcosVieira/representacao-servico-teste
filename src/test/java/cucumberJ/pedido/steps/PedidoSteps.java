package cucumberJ.pedido.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exemplos.pedido.ItemPedido;

import java.math.BigDecimal;
import java.text.MessageFormat;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class PedidoSteps {
	
	private List<ItemPedido> pedido;
	private BigDecimal totalPedido;
	
	@Given("^Eu tenho um pepino$")
	public void eu_tenho_um_pepino() throws Throwable {
		System.out.println("Eu tenho um pepino");
	}

	@Given("^Eu tenho (\\d+) (.+) na minha cesta$")
	public void eu_tenho_na_minha_cesta(final int qtd, final String descricao) throws Throwable {
	    System.out.println(MessageFormat.format("Eu tenho {0} {1} na minha cesta", qtd, descricao));
	}
	
	@Given("^Eu tenho uma banana (?:prata|maça|nanica) na minha cesta$")
	public void eu_tenho_uma_banana_na_minha_cesta() throws Throwable {
	    System.out.println("Eu tenho uma banana na minha cesta");
	}	

	@Given("^Eu tenho uma manga (espada|rosa|coquinho) na minha cesta$")
	public void eu_tenho_uma_manga_na_minha_cesta(final String tipoManga) throws Throwable {
	    System.out.println(MessageFormat.format("Eu tenho uma manga {0} na minha cesta", tipoManga));
	}
	
	@Given("^Eu tenho um pedido$")
	public void eu_tenho_um_pedido(final List<ItemPedido> pedido) throws Throwable {
		this.pedido = pedido;
	}
	
	@When("^Pedir o cálculo do total do pedido$")
	public void pedir_o_calculo_do_total_do_pedido() throws Throwable {
		this.totalPedido = new BigDecimal(0D);
		
	    for (ItemPedido itemPedido : pedido) {
	        final double totalItemPedido = itemPedido.getQuantidade() * itemPedido.getValor();
	        System.out.println(MessageFormat.format("{0} {1} custando $ {2} = $ {3}",
	        		itemPedido.getQuantidade(), 
	        		itemPedido.getDescricao(), 
	        		itemPedido.getValor(), 
	        		totalItemPedido));
	        this.totalPedido = this.totalPedido.add(
	        		new BigDecimal(totalItemPedido).setScale(2, BigDecimal.ROUND_DOWN));
	    }
	}

	@Then("^Deverá resultar em \\$ (.+)$")
	public void devera_ser_mostrado(final Double valor) throws Throwable {
		assertThat(this.totalPedido.doubleValue()).isEqualTo(valor);
	}

}
