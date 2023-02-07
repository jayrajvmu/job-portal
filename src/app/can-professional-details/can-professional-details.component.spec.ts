import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanProfessionalDetailsComponent } from './can-professional-details.component';

describe('CanProfessionalDetailsComponent', () => {
  let component: CanProfessionalDetailsComponent;
  let fixture: ComponentFixture<CanProfessionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanProfessionalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanProfessionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
