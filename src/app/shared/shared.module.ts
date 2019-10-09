import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { AgenciaCreateComponent } from './component/agencia/agencia-create/agencia-create.component';
import { AgenciaDetailComponent } from './component/agencia/agencia-detail/agencia-detail.component';
import { AgenciaListComponent } from './component/agencia/agencia-list/agencia-list.component';

import { BolsaCreateComponent } from './component/bolsas/bolsa-create/bolsa-create.component';
import { BolsaDetailComponent } from './component/bolsas/bolsa-detail/bolsa-detail.component';
import { BolsaListComponent } from './component/bolsas/bolsa-list/bolsa-list.component';

import { DadosBancariosCreateComponent } from './component/dadosBancarios/dados-bancarios-create/dados-bancarios-create.component';
import { DadosBancariosDetailComponent } from './component/dadosBancarios/dados-bancarios-detail/dados-bancarios-detail.component';
import { DadosBancariosListComponent } from './component/dadosBancarios/dados-bancarios-list/dados-bancarios-list.component';

import { UsuarioCreateComponent } from './component/usuario/usuario-create/usuario-create.component';
import { UsuarioDetailComponent } from './component/usuario/usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from './component/usuario/usuario-list/usuario-list.component';

import { MovimentacaoCreateComponent } from './component/movimentacao/movimentacao-create/movimentacao-create.component';
import { MovimentacaoDetailComponent } from './component/movimentacao/movimentacao-detail/movimentacao-detail.component';
import { MovimentacaoListComponent } from './component/movimentacao/movimentacao-list/movimentacao-list.component';

import { TipoBolsaCreateComponent } from './component/tipoBolsa/tipo-bolsa-create/tipo-bolsa-create.component';
import { TipoBolsaDetailComponent } from './component/tipoBolsa/tipo-bolsa-detail/tipo-bolsa-detail.component';
import { TipoBolsaListComponent } from './component/tipoBolsa/tipo-bolsa-list/tipo-bolsa-list.component';

@NgModule({
  declarations: [
    AgenciaCreateComponent,
    AgenciaDetailComponent,
    AgenciaListComponent,
    BolsaCreateComponent,
    BolsaDetailComponent,
    BolsaListComponent,
    DadosBancariosCreateComponent,
    DadosBancariosDetailComponent,
    DadosBancariosListComponent,
    UsuarioCreateComponent,
    UsuarioDetailComponent,
    UsuarioListComponent,
    MovimentacaoCreateComponent,
    MovimentacaoDetailComponent,
    MovimentacaoListComponent,
    TipoBolsaCreateComponent,
    TipoBolsaDetailComponent,
    TipoBolsaListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    AgenciaCreateComponent,
    AgenciaDetailComponent,
    AgenciaListComponent,
    BolsaCreateComponent,
    BolsaDetailComponent,
    BolsaListComponent,
    DadosBancariosCreateComponent,
    DadosBancariosDetailComponent,
    DadosBancariosListComponent,
    UsuarioCreateComponent,
    UsuarioDetailComponent,
    UsuarioListComponent,
    MovimentacaoCreateComponent,
    MovimentacaoDetailComponent,
    MovimentacaoListComponent,
    TipoBolsaCreateComponent,
    TipoBolsaDetailComponent,
    TipoBolsaListComponent
  ]
})
export class SharedModule { }
