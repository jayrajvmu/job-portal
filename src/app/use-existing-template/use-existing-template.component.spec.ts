import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseExistingTemplateComponent } from './use-existing-template.component';

describe('UseExistingTemplateComponent', () => {
  let component: UseExistingTemplateComponent;
  let fixture: ComponentFixture<UseExistingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseExistingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseExistingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
