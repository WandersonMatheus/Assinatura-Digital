package com.Equipe1.AssinaturaDigital.Cliente;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Equipe1.AssinaturaDigital.Funcionario.FuncionarioModel;

public interface ClienteRepository extends MongoRepository<ClienteModel,String>{

    Optional<ClienteModel> findByEmail(String email);
    boolean existsByEmail(String email);
    List<FuncionarioModel> findByNomeContainingIgnoreCase(String parteDoNome);
}
