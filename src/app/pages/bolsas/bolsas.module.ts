import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BolsasRoutingModule } from './bolsas-routing.module';
import { BolsasComponent } from './bolsas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BolsasMovimentacaoComponent } from './bolsas-movimentacao/bolsas-movimentacao.component';

@NgModule({
  declarations: [
    BolsasComponent,
    BolsasMovimentacaoComponent
  ],
  imports: [
    CommonModule,
    BolsasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BolsasModule { }
