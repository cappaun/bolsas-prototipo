import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.scss']
})
export class AgenciaComponent implements OnInit {

  public editar: boolean;
  public detalhar: boolean;

  public modalRef: BsModalRef;

  public agenciaSelecionada: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public fechaModal(): void {
    this.modalRef.hide();
  }

  // OUTPUTS
  public chamaModal(agencia: any, modal: BsModalRef): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.agenciaSelecionada = agencia;
    this.modalService.show(modal);
  }

  // OUTPUTS
}
