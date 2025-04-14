package com.Equipe1.AssinaturaDigital.Assinatura;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "assinaturas") 
public class AssinaturaModel {

    @Id
    private String id; 
    
    private String clienteId;  
    private String termoId;    
    private String cenarioId;  
    
    private LocalDateTime dataAssinatura;
    private String ip;
    private String localizacao;

    // Construtores, getters e setters

    public AssinaturaModel() {
    }

    public AssinaturaModel(String clienteId, String termoId, String cenarioId, LocalDateTime dataAssinatura, String ip, String localizacao) {
        this.clienteId = clienteId;
        this.termoId = termoId;
        this.cenarioId = cenarioId;
        this.dataAssinatura = dataAssinatura;
        this.ip = ip;
        this.localizacao = localizacao;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClienteId() {
        return clienteId;
    }

    public void setClienteId(String clienteId) {
        this.clienteId = clienteId;
    }

    public String getTermoId() {
        return termoId;
    }

    public void setTermoId(String termoId) {
        this.termoId = termoId;
    }

    public String getCenarioId() {
        return cenarioId;
    }

    public void setCenarioId(String cenarioId) {
        this.cenarioId = cenarioId;
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
