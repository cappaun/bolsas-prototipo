import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBancariosCreateComponent } from './dados-bancarios-create.component';

describe('DadosBancariosCreateComponent', () => {
  let component: DadosBancariosCreateComponent;
  let fixture: ComponentFixture<DadosBancariosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosBancariosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBancariosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
