import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoBolsaComponent } from './tipo-bolsa.component';

const routes: Routes = [
  {
    path: '',
    component: TipoBolsaComponent,
    data: {
      title: 'Tipo Bolsa'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoBolsaRoutingModule { }
