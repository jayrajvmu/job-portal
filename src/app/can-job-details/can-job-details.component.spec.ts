import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanJobDetailsComponent } from './can-job-details.component';

describe('CanJobDetailsComponent', () => {
  let component: CanJobDetailsComponent;
  let fixture: ComponentFixture<CanJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanJobDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
