import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanAdvancedDetailsComponent } from './can-advanced-details.component';

describe('CanAdvancedDetailsComponent', () => {
  let component: CanAdvancedDetailsComponent;
  let fixture: ComponentFixture<CanAdvancedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanAdvancedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanAdvancedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
