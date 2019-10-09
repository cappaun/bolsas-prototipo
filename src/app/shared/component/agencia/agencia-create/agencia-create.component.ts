import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agencia-create',
  templateUrl: './agencia-create.component.html',
  styleUrls: ['./agencia-create.component.scss']
})
export class AgenciaCreateComponent implements OnInit {

  @Input() agencia: any;

  public agenciaForm: FormGroup;

  public msg: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.agenciaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.msg = false;
  }

  ngOnInit() {
    this.populaCampos();
  }

  public populaCampos(): void {
    this.agenciaForm.get('nome').setValue(this.agencia.nome);
    this.agenciaForm.get('email').setValue(this.agencia.email);
  }

  public cadastrar(): void {
    this.msg = true;
  }
}
