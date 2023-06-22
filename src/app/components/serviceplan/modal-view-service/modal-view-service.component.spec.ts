import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewServiceComponent } from './modal-view-service.component';

describe('ModalViewServiceComponent', () => {
  let component: ModalViewServiceComponent;
  let fixture: ComponentFixture<ModalViewServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
