import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerMyaccountComponent } from './employer-myaccount.component';

describe('EmployerMyaccountComponent', () => {
  let component: EmployerMyaccountComponent;
  let fixture: ComponentFixture<EmployerMyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerMyaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
