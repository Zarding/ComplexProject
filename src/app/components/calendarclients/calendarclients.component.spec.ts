import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarclientsComponent } from './calendarclients.component';

describe('CalendarclientsComponent', () => {
  let component: CalendarclientsComponent;
  let fixture: ComponentFixture<CalendarclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarclientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
