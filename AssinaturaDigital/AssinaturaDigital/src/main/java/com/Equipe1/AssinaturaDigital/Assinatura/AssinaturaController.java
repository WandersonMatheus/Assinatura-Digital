package com.Equipe1.AssinaturaDigital.Assinatura;

import java.util.List;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/Assinaturas")
public class AssinaturaController {

    private final AssinaturaService assinaturaService;

    public AssinaturaController(AssinaturaService assinatura) {
        this.assinaturaService = assinatura;
    }

    // Corrigido: agora tem o @GetMapping para listar todas as assinaturas
    @GetMapping
    public ResponseEntity<List<AssinaturaModel>> listarAssinaturas() {
        return ResponseEntity.ok(assinaturaService.listarAssinatura());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssinaturaModel> buscarPorId(@PathVariable String id) {
        return assinaturaService.buscarAssinatura(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
  @PostMapping("/{id}/gerar-link")
    public ResponseEntity<AssinaturaModel> gerarLink(@PathVariable String id) {
        try {
            AssinaturaModel assinatura = assinaturaService.gerarLinkAssinatura(id);
            return ResponseEntity.ok(assinatura);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // NOVO: Marcar como assinada (quando cliente clica em assinar)
    @PostMapping("/{id}/assinar")
    public ResponseEntity<AssinaturaModel> marcarComoAssinada(@PathVariable String id) {
        try {
            AssinaturaModel assinatura = assinaturaService.marcarComoAssinada(id);
            return ResponseEntity.ok(assinatura);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // NOVO: Buscar por status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<AssinaturaModel>> buscarPorStatus(@PathVariable StatusAssinatura status) {
        List<AssinaturaModel> assinaturas = assinaturaService.buscarPorStatus(status);
        return ResponseEntity.ok(assinaturas);
    }
    @PostMapping
    public ResponseEntity<AssinaturaModel> criarAssinaturaComPdf(
        @RequestParam String clienteId,
        @RequestParam String termoId,
        @RequestParam(required = false) String cenarioId,
        @RequestParam("pdf") MultipartFile pdfFile
    ) {
        try {
            AssinaturaModel novaAssinatura = assinaturaService.criarAssinatura(clienteId, termoId, cenarioId, pdfFile);
            return ResponseEntity.ok(novaAssinatura);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }   
}
