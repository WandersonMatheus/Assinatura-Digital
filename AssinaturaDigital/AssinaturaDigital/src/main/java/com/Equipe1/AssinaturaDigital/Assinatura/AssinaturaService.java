package com.Equipe1.AssinaturaDigital.Assinatura;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class AssinaturaService {
//CRUD
    private AssinaturaRepository assinaturaRepository;

    public AssinaturaService(AssinaturaRepository assinaturaRepository) {
        this.assinaturaRepository = assinaturaRepository;
    }

// create
    public AssinaturaModel criarAssinatura(AssinaturaModel assinatura){
        return assinaturaRepository.save(assinatura);
    }
// GET
    public Optional<AssinaturaModel> buscarAssinatura(String id){
        return assinaturaRepository.findById(id);
    }
    public List<AssinaturaModel> listarAssinatura(){
        return assinaturaRepository.findAll();
    }
}
