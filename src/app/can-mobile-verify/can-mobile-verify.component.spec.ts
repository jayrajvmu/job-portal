import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanMobileVerifyComponent } from './can-mobile-verify.component';

describe('CanMobileVerifyComponent', () => {
  let component: CanMobileVerifyComponent;
  let fixture: ComponentFixture<CanMobileVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanMobileVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanMobileVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
