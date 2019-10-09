import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tipo-bolsa-list',
  templateUrl: './tipo-bolsa-list.component.html',
  styleUrls: ['./tipo-bolsa-list.component.scss']
})
export class TipoBolsaListComponent implements OnInit {

  @Output() saida: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public detalhar(): void {
    this.saida.emit('');
  }
}
