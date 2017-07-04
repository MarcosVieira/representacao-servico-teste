package exemplos.banco;

import java.util.List;

public class BancoBuilder {

    private Banco banco;

    public BancoBuilder() {
        this.banco = new Banco();
    }

    public BancoBuilder comNome(final String nomeBanco) {
        this.banco.setNome(nomeBanco);
        return this;
    }

    public BancoBuilder comContas(final List<Conta> listaDeContas) {
        this.banco.setListaDeContas(listaDeContas);
        return this;
    }

    public BancoBuilder adicionaConta(final Conta conta) {
        this.banco.getListaDeContas().add(conta);
        return this;
    }

    public Banco criar() {
        return this.banco;
    }

}
