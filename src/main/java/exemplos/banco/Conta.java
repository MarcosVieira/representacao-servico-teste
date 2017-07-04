package exemplos.banco;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class Conta {

    private String dono;
    private Integer numero;
    private Double saldo;
    private Double limite;

    public Conta() {}

    public boolean sacar(final Double valor) {
          if (saldo < valor) {
              // Não pode sacar
        	  return false;
          } 
          
          // Pode sacar
          saldo -= valor;
          return true;
    }

    public boolean depositar(final Double valor) {
          if (limite < valor + saldo) {
        	  // Não pode depositar
              return false;
          } 

          // Pode depositar
          saldo += valor;
          return true;
    }

    public String getDono() {
          return this.dono;
    }

    public void setDono(final String dono) {
          this.dono = dono;
    }

    public Integer getNumero() {
          return this.numero;
    }

    public void setNumero(final Integer numero) {
          this.numero = numero;
    }

    public Double getSaldo() {
          return this.saldo;
    }

    public void setSaldo(final Double saldo) {
          this.saldo = saldo;
    }

    public Double getLimite() {
          return this.limite;
    }

    public void setLimite(final Double limite) {
          this.limite = limite;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.NO_CLASS_NAME_STYLE);
    }

}
