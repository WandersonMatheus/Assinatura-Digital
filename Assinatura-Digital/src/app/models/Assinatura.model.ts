export interface Assinatura {
  id: string;
  titulo: string;
  funcionarioId: string;
  clienteId: string;
  termosIds: string[];
  dataCriacao: string; // ou Date se o backend enviar formatado
  status: 'CRIADA' | 'LINK_ENVIADO' | 'ASSINADA' | 'CANCELADA';
  linkAssinatura?: string;
  dataEnvioLink?: string;
  dataAssinatura?: string;
}