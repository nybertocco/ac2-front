export interface Inscricao {
  id: number;
  nome: string;
  email: string;
  oficina: string;
  status: 'Pendente' | 'Confirmada';
}