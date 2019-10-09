import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterbarComponent
  ]
})
export class LayoutModule { }
