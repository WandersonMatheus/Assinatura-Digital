package com.Equipe1.AssinaturaDigital.Model;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
@Entity
@Document(collection = "assinaturas")
public class AssinaturaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    private ClienteModel cliente;

    @ManyToOne(optional = false) 
    private TermoModel termo;

    @ManyToOne(optional = false)   
    private CenarioModel cenario;
    private LocalDateTime dataAssinatura;
    private String ip;
    private String localizacao;
   
    public AssinaturaModel() {
    }

    public AssinaturaModel(ClienteModel cliente, TermoModel termo, CenarioModel cenario, LocalDateTime dataAssinatura,
            String ip, String localizacao) {
        this.cliente = cliente;
        this.termo = termo;
        this.cenario = cenario;
        this.dataAssinatura = dataAssinatura;
        this.ip = ip;
        this.localizacao = localizacao;
    }

    public Long getId() {
        return id;
    }

    public ClienteModel getCliente() {
        return cliente;
    }

    public void setCliente(ClienteModel cliente) {
        this.cliente = cliente;
    }

    public TermoModel getTermo() {
        return termo;
    }

    public void setTermo(TermoModel termo) {
        this.termo = termo;
    }

    public CenarioModel getCenario() {
        return cenario;
    }

    public void setCenario(CenarioModel cenario) {
        this.cenario = cenario;
    }

    public LocalDateTime getDataAssinatura() {
        return dataAssinatura;
    }

    public void setDataAssinatura(LocalDateTime dataAssinatura) {
        this.dataAssinatura = dataAssinatura;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }
    



}
