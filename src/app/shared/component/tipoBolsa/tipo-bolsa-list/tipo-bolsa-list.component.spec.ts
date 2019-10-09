import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBolsaListComponent } from './tipo-bolsa-list.component';

describe('TipoBolsaListComponent', () => {
  let component: TipoBolsaListComponent;
  let fixture: ComponentFixture<TipoBolsaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBolsaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBolsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
