import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agencia-detail',
  templateUrl: './agencia-detail.component.html',
  styleUrls: ['./agencia-detail.component.scss']
})
export class AgenciaDetailComponent implements OnInit {

  @Input() agencia: any;

  @Output() editar: EventEmitter<boolean> = new EventEmitter<boolean>();

  public agenciaForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.agenciaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.populaCampos();
  }

  public populaCampos(): void {
    this.agenciaForm.get('nome').setValue(this.agencia.nome);
    this.agenciaForm.get('email').setValue(this.agencia.email);
  }

  public editarAgencia(): void {
    this.editar.emit(true);
  }
}
