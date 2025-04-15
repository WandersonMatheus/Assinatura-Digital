package com.Equipe1.AssinaturaDigital.Cenario;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface CenarioRepository extends MongoRepository<CenarioModel,String>{

    Optional<CenarioModel> findByEmail(String email);
    boolean existsByEmail(String email);
    List<CenarioModel> findByNomeContainingIgnoreCase(String parteDoNome);
}
