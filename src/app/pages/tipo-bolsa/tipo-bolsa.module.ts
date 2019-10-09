import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoBolsaRoutingModule } from './tipo-bolsa-routing.module';
import { TipoBolsaComponent } from './tipo-bolsa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipoBolsaComponent],
  imports: [
    CommonModule,
    TipoBolsaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoBolsaModule { }
