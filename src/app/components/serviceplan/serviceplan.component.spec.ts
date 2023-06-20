import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceplanComponent } from './serviceplan.component';

describe('ServiceplanComponent', () => {
  let component: ServiceplanComponent;
  let fixture: ComponentFixture<ServiceplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
