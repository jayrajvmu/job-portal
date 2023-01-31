import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanEmailVerifyComponent } from './can-email-verify.component';

describe('CanEmailVerifyComponent', () => {
  let component: CanEmailVerifyComponent;
  let fixture: ComponentFixture<CanEmailVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanEmailVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanEmailVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
