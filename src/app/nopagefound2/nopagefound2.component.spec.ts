import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nopagefound2Component } from './nopagefound2.component';

describe('Nopagefound2Component', () => {
  let component: Nopagefound2Component;
  let fixture: ComponentFixture<Nopagefound2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nopagefound2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nopagefound2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
