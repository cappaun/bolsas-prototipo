import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBolsaDetailComponent } from './tipo-bolsa-detail.component';

describe('TipoBolsaDetailComponent', () => {
  let component: TipoBolsaDetailComponent;
  let fixture: ComponentFixture<TipoBolsaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBolsaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBolsaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
