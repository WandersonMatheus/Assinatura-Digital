package com.Equipe1.AssinaturaDigital.Termo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TermoService {
    @Autowired
    private TermoRepository termoRepository;
}
