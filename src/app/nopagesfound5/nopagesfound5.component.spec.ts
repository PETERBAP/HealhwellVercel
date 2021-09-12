import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nopagesfound5Component } from './nopagesfound5.component';

describe('Nopagesfound5Component', () => {
  let component: Nopagesfound5Component;
  let fixture: ComponentFixture<Nopagesfound5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nopagesfound5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nopagesfound5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
