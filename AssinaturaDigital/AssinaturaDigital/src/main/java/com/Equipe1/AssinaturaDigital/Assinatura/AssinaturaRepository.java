package com.Equipe1.AssinaturaDigital.Assinatura;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Equipe1.AssinaturaDigital.Funcionario.FuncionarioModel;

public interface AssinaturaRepository extends MongoRepository<AssinaturaModel,String>{

}
