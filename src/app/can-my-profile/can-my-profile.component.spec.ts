import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanMyProfileComponent } from './can-my-profile.component';

describe('CanMyProfileComponent', () => {
  let component: CanMyProfileComponent;
  let fixture: ComponentFixture<CanMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanMyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
