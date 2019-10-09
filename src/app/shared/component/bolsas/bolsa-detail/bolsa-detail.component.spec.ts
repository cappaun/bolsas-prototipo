import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaDetailComponent } from './bolsa-detail.component';

describe('BolsaDetailComponent', () => {
  let component: BolsaDetailComponent;
  let fixture: ComponentFixture<BolsaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
