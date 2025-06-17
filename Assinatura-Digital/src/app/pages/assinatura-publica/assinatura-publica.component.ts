import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssinaturasService } from '../../services/assinaturas.service';
import { Assinatura } from '../../models/Assinatura.model';
import { Cliente } from '../../models/Cliente.model';
import { Termo } from '../../models/Termo.model';
import { SafeUrlPipe } from "../../pipes/safe-url.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assinatura-publica',
  templateUrl: './assinatura-publica.component.html',
  styleUrls: ['./assinatura-publica.component.scss'],
  imports: [SafeUrlPipe,CommonModule]
})
export class AssinaturaPublicaComponent implements OnInit {
  pdfUrl: string = '';
  assinatura!: Assinatura;
  cliente!: Cliente;
  termo!: Termo;

  constructor(
    private assinaturasService: AssinaturasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.assinaturasService.buscarAssinaturaPorId(id).subscribe(assinatura => {
      this.assinatura = assinatura;

      // Buscar cliente
      this.assinaturasService.buscarCliente(assinatura.clienteId).subscribe(cliente => {
        this.cliente = cliente;
      });

      // Buscar termo
      this.assinaturasService.buscarTermo(assinatura.termoId).subscribe(termo => {
        this.termo = termo;
      });
    });
  }

  assinar() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.assinaturasService.marcarComoAssinada(id).subscribe(() => {
        alert('Documento assinado com sucesso!');
      });
    }
  }
}

