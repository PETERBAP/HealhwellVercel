import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nopagesfound3Component } from './nopagesfound3.component';

describe('Nopagesfound3Component', () => {
  let component: Nopagesfound3Component;
  let fixture: ComponentFixture<Nopagesfound3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nopagesfound3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nopagesfound3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
