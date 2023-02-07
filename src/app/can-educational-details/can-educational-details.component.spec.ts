import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanEducationalDetailsComponent } from './can-educational-details.component';

describe('CanEducationalDetailsComponent', () => {
  let component: CanEducationalDetailsComponent;
  let fixture: ComponentFixture<CanEducationalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanEducationalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanEducationalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
