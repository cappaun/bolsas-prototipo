import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBancariosDetailComponent } from './dados-bancarios-detail.component';

describe('DadosBancariosDetailComponent', () => {
  let component: DadosBancariosDetailComponent;
  let fixture: ComponentFixture<DadosBancariosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosBancariosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBancariosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
