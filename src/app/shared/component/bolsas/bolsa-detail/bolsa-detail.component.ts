import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bolsa-detail',
  templateUrl: './bolsa-detail.component.html',
  styleUrls: ['./bolsa-detail.component.scss']
})
export class BolsaDetailComponent implements OnInit {

  @Input() bolsa: any;
  @Input() botoes: boolean;

  @Output() editar: EventEmitter<string> = new EventEmitter<string>();
  @Output() associar: EventEmitter<string> = new EventEmitter<string>();
  @Output() movimenta: EventEmitter<boolean> = new EventEmitter<boolean>();

  public bolsaForm: FormGroup;

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

  public editarBolsa(): void {
    this.editar.emit('modalEditar');
  }
  public associarUsuario(): void {
    this.associar.emit('modalAssociar');
  }
  public movimentacao(): void {
    this.movimenta.emit(true);
  }
}
