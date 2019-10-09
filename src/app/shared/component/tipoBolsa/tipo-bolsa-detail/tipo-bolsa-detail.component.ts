import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-bolsa-detail',
  templateUrl: './tipo-bolsa-detail.component.html',
  styleUrls: ['./tipo-bolsa-detail.component.scss']
})
export class TipoBolsaDetailComponent implements OnInit {

  @Output() saida: EventEmitter<any> = new EventEmitter<any>();

  public tipoBolsaForm: FormGroup;

  public msg: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.tipoBolsaForm = this.formBuilder.group({
      agencia: ['', Validators.required],
      programa: ['', Validators.required],
      nivel: ['', Validators.required],
      modalidade: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public editar(): void {
    this.saida.emit('');
  }
}
