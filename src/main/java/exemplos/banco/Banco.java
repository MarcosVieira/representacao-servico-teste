package exemplos.banco;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.ArrayList;
import java.util.List;

public class Banco {
    
    private String nome;
    private List<Conta> listaDeContas;

    public Banco() {
        this.listaDeContas = new ArrayList<Conta>();
    }

    public String getNome() {
        return this.nome;
    }
    
    public void setNome(final String nome) {
    	this.nome = nome;
    }
    
    public List<Conta> getListaDeContas() {
        return this.listaDeContas;
    }
    
    public void setListaDeContas(final List<Conta> listaDeContas) {
          this.listaDeContas = listaDeContas;
    }

    public void adicionaConta(final Conta conta) {
        this.listaDeContas.add(conta);
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);
    }
    
}
