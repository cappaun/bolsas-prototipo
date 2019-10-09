import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bolsa-create',
  templateUrl: './bolsa-create.component.html',
  styleUrls: ['./bolsa-create.component.scss']
})
export class BolsaCreateComponent implements OnInit {

  @Input() bolsa: any;

  @Output() modal: EventEmitter<string> = new EventEmitter<string>();

  public bolsaForm: FormGroup;

  public msg: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.bolsaForm = this.formBuilder.group({
      agencia: ['', Validators.required],
      programa: ['', Validators.required],
      nivel: ['', Validators.required],
      modalidade: ['', Validators.required],
      centrodecusto: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public populaCampos(): void {
    this.bolsaForm.get('agencia').setValue(this.bolsa.agencia);
    this.bolsaForm.get('programa').setValue(this.bolsa.programa);
    this.bolsaForm.get('nivel').setValue(this.bolsa.nivel);
    this.bolsaForm.get('modalidade').setValue(this.bolsa.modalidade);
    this.bolsaForm.get('centrodecusto').setValue(this.bolsa.centrodecusto);
  }

  public cadastrar(): void {
    this.msg = true;
  }
}
