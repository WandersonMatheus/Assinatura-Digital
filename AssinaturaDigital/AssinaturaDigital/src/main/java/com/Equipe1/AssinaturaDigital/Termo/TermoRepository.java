package com.Equipe1.AssinaturaDigital.Termo;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface TermoRepository extends MongoRepository<TermoModel,String>{
    Optional<TermoModel> findByTitulo(String titulo);
    boolean existsByTitulo(String titulo);
}
