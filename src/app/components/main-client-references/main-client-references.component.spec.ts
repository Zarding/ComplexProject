import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClientReferencesComponent } from './main-client-references.component';

describe('MainClientReferencesComponent', () => {
  let component: MainClientReferencesComponent;
  let fixture: ComponentFixture<MainClientReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClientReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainClientReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
