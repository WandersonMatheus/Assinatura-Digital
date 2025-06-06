package com.Equipe1.AssinaturaDigital;

public enum StatusAssinatura {
    CRIADA("Criada"),
    LINK_ENVIADO("Link Enviado"), 
    ASSINADA("Assinada"),
    CANCELADA("Cancelada");

    private final String descricao;
    
    StatusAssinatura(String descricao) {
        this.descricao = descricao;
    }
    
    public String getDescricao() {
        return descricao;
    }
}
