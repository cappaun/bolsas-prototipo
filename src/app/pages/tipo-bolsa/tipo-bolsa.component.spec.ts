import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBolsaComponent } from './tipo-bolsa.component';

describe('TipoBolsaComponent', () => {
  let component: TipoBolsaComponent;
  let fixture: ComponentFixture<TipoBolsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBolsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
