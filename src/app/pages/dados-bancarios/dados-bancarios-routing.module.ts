import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosBancariosComponent } from './dados-bancarios.component';

const routes: Routes = [
  {
    path: '',
    component: DadosBancariosComponent,
    data: {
      title: 'Dados Bancarios'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosBancariosRoutingModule { }
