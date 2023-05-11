import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddDocumentComponent } from './modal-add-document.component';

describe('ModalAddDocumentComponent', () => {
  let component: ModalAddDocumentComponent;
  let fixture: ComponentFixture<ModalAddDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
