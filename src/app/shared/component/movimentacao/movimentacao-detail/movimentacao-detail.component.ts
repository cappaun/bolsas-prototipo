import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movimentacao-detail',
  templateUrl: './movimentacao-detail.component.html',
  styleUrls: ['./movimentacao-detail.component.scss']
})
export class MovimentacaoDetailComponent implements OnInit {

  @Input() bolsa: any;
  @Input() usuario: any;

  @Output() editar: EventEmitter<boolean> = new EventEmitter<boolean>();

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
