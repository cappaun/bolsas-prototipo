import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-bolsas-movimentacao',
  templateUrl: './bolsas-movimentacao.component.html',
  styleUrls: ['./bolsas-movimentacao.component.scss']
})
export class BolsasMovimentacaoComponent implements OnInit {

  public modalRef: BsModalRef;

  public bolsaSelecionada: any;
  public buttons: boolean;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.buttons = false;
  }
}
