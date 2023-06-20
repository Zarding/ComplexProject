import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintypesComponent } from './admintypes.component';

describe('AdmintypesComponent', () => {
  let component: AdmintypesComponent;
  let fixture: ComponentFixture<AdmintypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
