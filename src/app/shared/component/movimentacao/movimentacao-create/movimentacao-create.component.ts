import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movimentacao-create',
  templateUrl: './movimentacao-create.component.html',
  styleUrls: ['./movimentacao-create.component.scss']
})
export class MovimentacaoCreateComponent implements OnInit {

  @Input() bolsa: any;
  @Input() usuario: any;

  public movimentaForm: FormGroup;

  public msg: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.movimentaForm = this.formBuilder.group({
      bolsa: ['', Validators.required],
      usuario: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.populaCampos();
  }

  public populaCampos(): void {
    this.movimentaForm.get('bolsa').setValue(this.bolsa.agencia + " / " + this.bolsa.programa);
    this.movimentaForm.get('usuario').setValue(this.usuario.nome);
  }

  public cadastrar(): void {
    this.msg = true;
  }
}

