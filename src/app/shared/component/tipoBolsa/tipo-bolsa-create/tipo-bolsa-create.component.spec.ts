import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBolsaCreateComponent } from './tipo-bolsa-create.component';

describe('TipoBolsaCreateComponent', () => {
  let component: TipoBolsaCreateComponent;
  let fixture: ComponentFixture<TipoBolsaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBolsaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBolsaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
