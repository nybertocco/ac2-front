import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Inscricao } from '../services/inscricao';
import { InscricaoService } from '../services/inscricao.service';

@Component({
  selector: 'app-lista-inscricoes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
  styleUrls: ['./lista-inscricoes.css'] 
})
export class ListaInscricoes {
  inscricoes: Inscricao[] = [];

  constructor(private inscricaoService: InscricaoService) {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.inscricoes = [...this.inscricaoService.listar()];
  }

  confirmar(id: number): void {
    this.inscricaoService.confirmarInscricao(id);
    this.atualizarLista();
  }

  remover(id: number): void {
    this.inscricaoService.remover(id);
    this.atualizarLista();
  }

  get total(): number {
    return this.inscricoes.length;
  }

  get confirmadas(): number {
    return this.inscricoes.filter(
      inscricao => inscricao.status === 'Confirmada'
    ).length;
  }

  get pendentes(): number {
    return this.inscricoes.filter(
      inscricao => inscricao.status === 'Pendente'
    ).length;
  }
}