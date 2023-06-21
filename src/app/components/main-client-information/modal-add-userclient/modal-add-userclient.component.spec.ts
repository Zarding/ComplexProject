import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddUserclientComponent } from './modal-add-userclient.component';

describe('ModalAddUserclientComponent', () => {
  let component: ModalAddUserclientComponent;
  let fixture: ComponentFixture<ModalAddUserclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddUserclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddUserclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
