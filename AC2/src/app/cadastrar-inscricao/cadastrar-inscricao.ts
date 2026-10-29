import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../services/inscricao.service';


@Component({
  selector: 'app-cadastrar-inscricao',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
  styleUrls: ['./cadastrar-inscricao.css']  
})
export class CadastrarInscricao {
  nome = '';
  email = '';
  oficina = '';

  oficinas: string[] = [
    'Oficina do João',
    'Oficina do Ronaldo',
    'Oficina do Luizão'
  ];

  constructor(private inscricaoService: InscricaoService) {}

  cadastrar(): void {
    if (!this.nome.trim() || !this.email.trim() || !this.oficina) {
      return;
    }

    this.inscricaoService.adicionar({
      nome: this.nome.trim(),
      email: this.email.trim(),
      oficina: this.oficina
    });

    this.nome = '';
    this.email = '';
    this.oficina = '';
  }
}