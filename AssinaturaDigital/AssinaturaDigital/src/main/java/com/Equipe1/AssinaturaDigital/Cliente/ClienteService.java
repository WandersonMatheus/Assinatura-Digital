package com.Equipe1.AssinaturaDigital.Cliente;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public ClienteModel criarCliente(ClienteModel cliente){
        return clienteRepository.save(cliente);
    }

    public List<ClienteModel> listarTodos(){
        return clienteRepository.findAll();
    }

    public Optional<ClienteModel> buscarById(String id){
        return clienteRepository.findById(id);
    }

    public Optional<ClienteModel> updateCliente(String id,ClienteModel dadosAtualizadoos){
        return clienteRepository.findById(id)
            .map(cliente ->{
                cliente.setNome(dadosAtualizadoos.getNome());
                cliente.setEmail(dadosAtualizadoos.getEmail());
                return clienteRepository.save(cliente);
            });

    }

    public boolean apagarCliente(String id){
        if (clienteRepository.existsById(id)) {
            clienteRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
