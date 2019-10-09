import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bolsas',
  templateUrl: './bolsas.component.html',
  styleUrls: ['./bolsas.component.scss']
})
export class BolsasComponent implements OnInit {

  public modalRef: BsModalRef;

  public bolsaSelecionada: any;
  public buttons: boolean;

  constructor(
    private modalService: BsModalService,
    private route: Router
    ) { }

  ngOnInit() {
    this.buttons = true;
  }

  public fechaModal(): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  // OUTPUTS
  public saidaMovimenta(movimenta: boolean): void {
    this.fechaModal();
    if (movimenta) {
      this.route.navigate(['bolsas/movimentacao']);
    }
  }
  public chamaModal(modal: BsModalRef, bolsa: any): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.bolsaSelecionada = bolsa;
    this.modalRef = this.modalService.show(modal);
  }
  // OUTPUTS

}
