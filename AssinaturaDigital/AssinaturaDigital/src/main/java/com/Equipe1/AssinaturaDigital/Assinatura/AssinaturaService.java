package com.Equipe1.AssinaturaDigital.Assinatura;

import java.time.LocalDateTime;
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
      
    public AssinaturaModel gerarLinkAssinatura(String id) {
        Optional<AssinaturaModel> assinaturaOpt = assinaturaRepository.findById(id);
        
        if (assinaturaOpt.isPresent()) {
            AssinaturaModel assinatura = assinaturaOpt.get();
            
            // Gerar link (sempre o mesmo padrão)
            String link = "https://seudominio.com/assinar/" + id;
            
            // Atualizar status e dados
            assinatura.setLinkAssinatura(link);
            assinatura.setStatus(StatusAssinatura.LINK_ENVIADO);
            assinatura.setDataEnvioLink(LocalDateTime.now());
            
            return assinaturaRepository.save(assinatura);
        }
        
        throw new RuntimeException("Assinatura não encontrada");
    }
    
    public AssinaturaModel marcarComoAssinada(String id) {
        Optional<AssinaturaModel> assinaturaOpt = assinaturaRepository.findById(id);
        
        if (assinaturaOpt.isPresent()) {
            AssinaturaModel assinatura = assinaturaOpt.get();
            
            assinatura.setStatus(StatusAssinatura.ASSINADA);
            assinatura.setDataAssinatura(LocalDateTime.now());
            
            return assinaturaRepository.save(assinatura);
        }
        
        throw new RuntimeException("Assinatura não encontrada");
    }
    
    public List<AssinaturaModel> buscarPorStatus(StatusAssinatura status) {
        return assinaturaRepository.findByStatus(status);
    }
}
