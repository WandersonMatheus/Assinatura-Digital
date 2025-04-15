package com.Equipe1.AssinaturaDigital.Termo;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface TermoRepository extends MongoRepository<TermoModel,String>{

    Optional<TermoModel> findByEmail(String email);

    boolean existsByEmail(String email);

    List<TermoModel> findByNomeContainingIgnoreCase(String parteDoNome);
}
