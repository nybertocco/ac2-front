import { Injectable } from '@angular/core';
import { Inscricao } from '../services/inscricao';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {
  private inscricoes: Inscricao[] = [];
  private proximoId = 1;

  listar(): Inscricao[] {
    return this.inscricoes;
  }

  adicionar(inscricao: Omit<Inscricao, 'id' | 'status'>): void {
    const novaInscricao: Inscricao = {
      id: this.proximoId++,
      nome: inscricao.nome,
      email: inscricao.email,
      oficina: inscricao.oficina,
      status: 'Pendente'
    };

    this.inscricoes.push(novaInscricao);
  }

  remover(id: number): void {
    this.inscricoes = this.inscricoes.filter(
      inscricao => inscricao.id !== id
    );
  }

  confirmarInscricao(id: number): void {
    const inscricao = this.inscricoes.find(
      inscricao => inscricao.id === id
    );

    if (inscricao && inscricao.status === 'Pendente') {
      inscricao.status = 'Confirmada';
    }
  }
}