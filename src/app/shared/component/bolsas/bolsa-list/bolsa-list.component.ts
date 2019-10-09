import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bolsa-list',
  templateUrl: './bolsa-list.component.html',
  styleUrls: ['./bolsa-list.component.scss']
})
export class BolsaListComponent implements OnInit {

  @Output() saidaBolsa: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public selecionaBolsa(agencia: any): void {
    this.saidaBolsa.emit(agencia);
  }
}
