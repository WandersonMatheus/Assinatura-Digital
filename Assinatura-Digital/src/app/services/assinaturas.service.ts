import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assinatura } from '../models/Assinatura.model';
import { Cliente } from '../models/Cliente.model';
import { Termo } from '../models/Termo.model';

@Injectable({
  providedIn: 'root'
})
export class AssinaturasService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }
criarAssinaturaComPdf(
  clienteId: string,
  termoId: string,
  cenarioId: string,
  pdfFile: File
): Observable<Assinatura> {
  const formData = new FormData();
  formData.append('clienteId', clienteId);
  formData.append('termoId', termoId);
  formData.append('cenarioId', cenarioId);
  formData.append('pdf', pdfFile); // CORRIGIDO: 'pdf' em vez de 'pdfFile'

  // CORRIGIDO: URL sem barra extra no final
  return this.http.post<Assinatura>(`${this.baseUrl}/Assinaturas`, formData);
}
  // Listar todas as assinaturas
  listarAssinaturas():Observable<Assinatura[]>{
  return this.http.get<Assinatura[]>(`${this.baseUrl}/Assinaturas`);
  }
    // Buscar assinatura por ID - usando o endpoint do seu controller
  buscarAssinaturaPorId(id: string): Observable<Assinatura> {
    return this.http.get<Assinatura>(`${this.baseUrl}/Assinaturas/${id}`);
  }

  // Buscar cliente por ID (assumindo que você tem um controller similar)
  buscarCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/Clientes/${id}`);
  }

  // Buscar termo por ID (assumindo que você tem um controller similar)
  buscarTermo(id: string): Observable<Termo> {
    return this.http.get<Termo>(`${this.baseUrl}/Termos/${id}`);
  }
  

    gerarLink(id: string): Observable<Assinatura> {
    return this.http.post<Assinatura>(`${this.baseUrl}/Assinaturas/${id}/gerar-link`, {});
  }

  // NOVO: Marcar como assinada
  marcarComoAssinada(id: string): Observable<Assinatura> {
    return this.http.post<Assinatura>(`${this.baseUrl}/Assinaturas/${id}/assinar`, {});
  }

  // NOVO: Buscar por status
  buscarPorStatus(status: string): Observable<Assinatura[]> {
    return this.http.get<Assinatura[]>(`${this.baseUrl}/Assinaturas/status/${status}`);
  }
}
