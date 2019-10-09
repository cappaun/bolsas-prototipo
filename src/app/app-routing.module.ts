import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bolsas'
  },
  {
    path: 'bolsas',
    loadChildren: () => import('./pages/bolsas/bolsas.module').then(x => x.BolsasModule),
    data: {
      title: 'Bolsas'
    }
  },
  {
    path: 'agencia',
    loadChildren: () => import('./pages/agencia/agencia.module').then(x => x.AgenciaModule),
    data: {
      title: 'Agencia'
    }
  },
  {
    path: 'dadosbancarios',
    loadChildren: () => import('./pages/dados-bancarios/dados-bancarios.module').then(x => x.DadosBancariosModule),
    data: {
      title: 'Dados Bancarios'
    }
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then(x => x.UsuarioModule),
    data: {
      title: 'Usuarios'
    }
  },
  {
    path: 'tipobolsa',
    loadChildren: () => import('./pages/tipo-bolsa/tipo-bolsa.module').then(x => x.TipoBolsaModule),
    data: {
      title: 'Tipo Bolsa'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
