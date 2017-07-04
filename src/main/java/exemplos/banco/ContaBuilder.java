package exemplos.banco;

public class ContaBuilder {

    private Conta conta;

    public ContaBuilder() {
        this.conta = new Conta();
    }

    public ContaBuilder comDono(final String nomeDono) {
        this.conta.setDono(nomeDono);
        return this;
    }

    public ContaBuilder comNumero(final Integer numero) {
        this.conta.setNumero(numero);
        return this;
    }

    public ContaBuilder comSaldo(final Double saldo) {
        this.conta.setSaldo(saldo);
        return this;
    }

    public ContaBuilder comLimite(final Double limite) {
        this.conta.setLimite(limite);
        return this;
    }

    public Conta criar() {
        return this.conta;
    }

}
