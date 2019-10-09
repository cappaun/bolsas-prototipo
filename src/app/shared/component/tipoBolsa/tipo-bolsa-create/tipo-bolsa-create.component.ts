import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tipo-bolsa-create',
  templateUrl: './tipo-bolsa-create.component.html',
  styleUrls: ['./tipo-bolsa-create.component.scss']
})
export class TipoBolsaCreateComponent implements OnInit {

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

  public cadastrar(): void {
    this.msg = true;
  }
}
