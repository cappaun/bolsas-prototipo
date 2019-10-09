import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaDetailComponent } from './agencia-detail.component';

describe('AgenciaDetailComponent', () => {
  let component: AgenciaDetailComponent;
  let fixture: ComponentFixture<AgenciaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
