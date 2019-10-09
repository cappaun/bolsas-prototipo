import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agencia-list',
  templateUrl: './agencia-list.component.html',
  styleUrls: ['./agencia-list.component.scss']
})
export class AgenciaListComponent implements OnInit {

  @Output() saidaAgencia: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public selecionaAgencia(agencia: any): void {
    this.saidaAgencia.emit(agencia);
  }
}
