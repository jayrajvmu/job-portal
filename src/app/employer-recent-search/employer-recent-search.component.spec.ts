import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerRecentSearchComponent } from './employer-recent-search.component';

describe('EmployerRecentSearchComponent', () => {
  let component: EmployerRecentSearchComponent;
  let fixture: ComponentFixture<EmployerRecentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerRecentSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerRecentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
