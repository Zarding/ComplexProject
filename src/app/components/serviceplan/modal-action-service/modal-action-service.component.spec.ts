import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActionServiceComponent } from './modal-action-service.component';

describe('ModalActionServiceComponent', () => {
  let component: ModalActionServiceComponent;
  let fixture: ComponentFixture<ModalActionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActionServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
