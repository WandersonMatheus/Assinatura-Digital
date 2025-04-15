package com.Equipe1.AssinaturaDigital.Funcionario;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Document(collection = "funcionarios_db")
public class FuncionarioModel {

    @Id
    private String id;
    private String nome;
    @Column(unique = true)
    @Email
    @NotBlank
    private String email;
    @NotBlank
    private String senha;
    
    public FuncionarioModel() {
    }

    public FuncionarioModel(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public String getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

        
}
