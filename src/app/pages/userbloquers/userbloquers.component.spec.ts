import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbloquersComponent } from './userbloquers.component';

describe('UserbloquersComponent', () => {
  let component: UserbloquersComponent;
  let fixture: ComponentFixture<UserbloquersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbloquersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbloquersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
