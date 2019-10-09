import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsasMovimentacaoComponent } from './bolsas-movimentacao.component';

describe('BolsasMovimentacaoComponent', () => {
  let component: BolsasMovimentacaoComponent;
  let fixture: ComponentFixture<BolsasMovimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsasMovimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsasMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
