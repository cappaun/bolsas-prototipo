import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBancariosListComponent } from './dados-bancarios-list.component';

describe('DadosBancariosListComponent', () => {
  let component: DadosBancariosListComponent;
  let fixture: ComponentFixture<DadosBancariosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosBancariosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBancariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
