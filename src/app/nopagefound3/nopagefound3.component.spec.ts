import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nopagefound3Component } from './nopagefound3.component';

describe('Nopagefound3Component', () => {
  let component: Nopagefound3Component;
  let fixture: ComponentFixture<Nopagefound3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nopagefound3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nopagefound3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
