import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoDetailComponent } from './movimentacao-detail.component';

describe('MovimentacaoDetailComponent', () => {
  let component: MovimentacaoDetailComponent;
  let fixture: ComponentFixture<MovimentacaoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
