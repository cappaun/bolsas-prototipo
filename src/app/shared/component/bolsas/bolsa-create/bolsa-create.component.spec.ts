import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaCreateComponent } from './bolsa-create.component';

describe('BolsaCreateComponent', () => {
  let component: BolsaCreateComponent;
  let fixture: ComponentFixture<BolsaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
