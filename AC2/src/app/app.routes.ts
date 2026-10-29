import { Routes } from '@angular/router';
import { CadastrarInscricao } from './cadastrar-inscricao/cadastrar-inscricao';
import { ListaInscricoes } from './lista-inscricoes/lista-inscricoes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrar-inscricao',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar-inscricao',
    component: CadastrarInscricao
  },
  {
    path: 'lista-inscricoes',
    component: ListaInscricoes
  }
];