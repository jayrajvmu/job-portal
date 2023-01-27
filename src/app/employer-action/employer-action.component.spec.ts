import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerActionComponent } from './employer-action.component';

describe('EmployerActionComponent', () => {
  let component: EmployerActionComponent;
  let fixture: ComponentFixture<EmployerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
