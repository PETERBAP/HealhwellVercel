import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nopagesfound4Component } from './nopagesfound4.component';

describe('Nopagesfound4Component', () => {
  let component: Nopagesfound4Component;
  let fixture: ComponentFixture<Nopagesfound4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nopagesfound4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nopagesfound4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
