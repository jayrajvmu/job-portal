import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanUpdateProfileComponent } from './can-update-profile.component';

describe('CanUpdateProfileComponent', () => {
  let component: CanUpdateProfileComponent;
  let fixture: ComponentFixture<CanUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanUpdateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
