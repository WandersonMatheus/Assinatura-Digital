package com.Equipe1.AssinaturaDigital.Model;

import java.util.List;
import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class CenarioModel {
    @Id
    @GeneratedValue
    private long id;
    private String titulo;
    @ManyToOne
    private FuncionarioModel funcionario;
    @ManyToOne
    private ClienteModel cliente;
    @OneToMany
    private List<TermoModel> termos;
    private LocalDateTime dataCriacao;
   
    
    public CenarioModel() {
    }
    public CenarioModel(String titulo, FuncionarioModel funcionario, ClienteModel cliente, List<TermoModel> termos,
            LocalDateTime dataCriacao) {
        this.titulo = titulo;
        this.funcionario = funcionario;
        this.cliente = cliente;
        this.termos = termos;
        this.dataCriacao = dataCriacao;
    }
    public long getId() {
        return id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public FuncionarioModel getFuncionario() {
        return funcionario;
    }
    public void setFuncionario(FuncionarioModel funcionario) {
        this.funcionario = funcionario;
    }
    public ClienteModel getCliente() {
        return cliente;
    }
    public void setCliente(ClienteModel cliente) {
        this.cliente = cliente;
    }
    public List<TermoModel> getTermos() {
        return termos;
    }
    public void setTermos(List<TermoModel> termos) {
        this.termos = termos;
    }
    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }
    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    
    
}
