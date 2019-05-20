import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthViewBookingsComponent } from './auth-view-bookings.component';

describe('AuthViewBookingsComponent', () => {
  let component: AuthViewBookingsComponent;
  let fixture: ComponentFixture<AuthViewBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthViewBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthViewBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
