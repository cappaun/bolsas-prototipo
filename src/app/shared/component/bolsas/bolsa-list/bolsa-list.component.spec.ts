import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaListComponent } from './bolsa-list.component';

describe('BolsaListComponent', () => {
  let component: BolsaListComponent;
  let fixture: ComponentFixture<BolsaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
