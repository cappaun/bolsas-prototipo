import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolsasComponent } from './bolsas.component';
import { BolsasMovimentacaoComponent } from './bolsas-movimentacao/bolsas-movimentacao.component';

const routes: Routes = [
  {
    path: '',
    component: BolsasComponent,
    data: {
      title: 'Bolsas'
    }
  },
  {
    path: 'movimentacao',
    component: BolsasMovimentacaoComponent,
    data: {
      title: 'Movimentação'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolsasRoutingModule { }
