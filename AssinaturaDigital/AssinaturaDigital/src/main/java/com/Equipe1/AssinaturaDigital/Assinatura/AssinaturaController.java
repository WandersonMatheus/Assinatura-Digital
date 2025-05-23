package com.Equipe1.AssinaturaDigital.Assinatura;

import java.util.List;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Assinaturas")
public class AssinaturaController {

    private final AssinaturaService assinatura;

    public AssinaturaController(AssinaturaService assinatura) {
        this.assinatura = assinatura;
    }

    // Corrigido: agora tem o @GetMapping para listar todas as assinaturas
    @GetMapping
    public ResponseEntity<List<AssinaturaModel>> listarAssinaturas() {
        return ResponseEntity.ok(assinatura.listarAssinatura());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssinaturaModel> buscarPorId(@PathVariable String id) {
        return assinatura.buscarAssinatura(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<AssinaturaModel> criarAssinaturaController(@RequestBody AssinaturaModel novaAssinatura) {
        AssinaturaModel criada = assinatura.criarAssinatura(novaAssinatura);
        return ResponseEntity.ok(criada);
    }
}
