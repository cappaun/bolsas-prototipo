import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosBancariosRoutingModule } from './dados-bancarios-routing.module';
import { DadosBancariosComponent } from './dados-bancarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DadosBancariosComponent],
  imports: [
    CommonModule,
    DadosBancariosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DadosBancariosModule { }
