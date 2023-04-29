import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClientInformationComponent } from './main-client-information.component';

describe('MainClientInformationComponent', () => {
  let component: MainClientInformationComponent;
  let fixture: ComponentFixture<MainClientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainClientInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainClientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
