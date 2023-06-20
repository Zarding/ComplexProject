import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddReferenceComponent } from './modal-add-reference.component';

describe('ModalAddReferenceComponent', () => {
  let component: ModalAddReferenceComponent;
  let fixture: ComponentFixture<ModalAddReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
