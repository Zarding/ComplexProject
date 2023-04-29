import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClientDocumentsComponent } from './main-client-documents.component';

describe('MainClientDocumentsComponent', () => {
  let component: MainClientDocumentsComponent;
  let fixture: ComponentFixture<MainClientDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClientDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainClientDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
