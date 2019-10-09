import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciaRoutingModule } from './agencia-routing.module';
import { AgenciaComponent } from './agencia.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgenciaComponent],
  imports: [
    CommonModule,
    AgenciaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgenciaModule { }
