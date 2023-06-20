import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceplanComponent } from './addserviceplan.component';

describe('AddServiceplanComponent', () => {
  let component: AddServiceplanComponent;
  let fixture: ComponentFixture<AddServiceplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
