package com.Equipe1.AssinaturaDigital.Funcionario;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface FuncionarioRepository extends MongoRepository<FuncionarioModel, String> {

    // Buscar por e-mail exato
    Optional<FuncionarioModel> findByEmail(String email);

    // Buscar todos da mesma equipe
    List<FuncionarioModel> findByEquipe(String equipe);

    // Verificar se já existe um email cadastrado
    boolean existsByEmail(String email);

    // Buscar por cargo (ex: todos os analistas)
    List<FuncionarioModel> findByCargo(String cargo);

    // Buscar por parte do nome (like)
    List<FuncionarioModel> findByNomeContainingIgnoreCase(String parteDoNome);
}
