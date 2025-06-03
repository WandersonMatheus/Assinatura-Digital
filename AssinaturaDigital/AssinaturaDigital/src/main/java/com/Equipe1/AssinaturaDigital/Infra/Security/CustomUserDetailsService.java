package com.Equipe1.AssinaturaDigital.Infra.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Equipe1.AssinaturaDigital.Funcionario.FuncionarioModel;
import com.Equipe1.AssinaturaDigital.Funcionario.FuncionarioRepository;

@Component
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final FuncionarioRepository repository;

    @Autowired
    public CustomUserDetailsService(FuncionarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        FuncionarioModel funcionario = repository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado com email: " + username));

        return funcionario;
    }
}
