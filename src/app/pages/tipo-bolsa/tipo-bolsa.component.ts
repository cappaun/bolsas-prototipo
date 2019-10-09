import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-tipo-bolsa',
  templateUrl: './tipo-bolsa.component.html',
  styleUrls: ['./tipo-bolsa.component.scss']
})
export class TipoBolsaComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public chamaModal(modal: BsModalRef): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalService.show(modal);
  }
}
