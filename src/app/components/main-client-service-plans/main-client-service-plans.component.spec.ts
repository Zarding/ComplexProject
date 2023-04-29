import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClientServicePlansComponent } from './main-client-service-plans.component';

describe('MainClientServicePlansComponent', () => {
  let component: MainClientServicePlansComponent;
  let fixture: ComponentFixture<MainClientServicePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClientServicePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainClientServicePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
