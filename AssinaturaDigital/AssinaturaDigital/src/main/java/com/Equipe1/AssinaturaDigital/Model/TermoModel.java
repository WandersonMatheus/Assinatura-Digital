package com.Equipe1.AssinaturaDigital.Model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Document(collection = "termos")
public class TermoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String conteudoHtml;
   
    @Enumerated(EnumType.STRING)
    private tipo tipoTermo;
    private String versao;
    
    public TermoModel() {
    }

    public TermoModel(String titulo, String conteudoHtml, tipo tipoTermo, String versao) {
        this.titulo = titulo;
        this.conteudoHtml = conteudoHtml;
        this.tipoTermo = tipoTermo;
        this.versao = versao;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getConteudoHtml() {
        return conteudoHtml;
    }

    public void setConteudoHtml(String conteudoHtml) {
        this.conteudoHtml = conteudoHtml;
    }

    public tipo getTipoTermo() {
        return tipoTermo;
    }

    public void setTipoTermo(tipo tipoTermo) {
        this.tipoTermo = tipoTermo;
    }

    public String getVersao() {
        return versao;
    }

    public void setVersao(String versao) {
        this.versao = versao;
    }
    
    @Override
    public String toString() {
        return "Termo{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", tipo=" + tipoTermo +
                ", versao='" + versao + '\'' +
                '}';
    }
    
}

