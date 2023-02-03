import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanRecentSearchComponent } from './can-recent-search.component';

describe('CanRecentSearchComponent', () => {
  let component: CanRecentSearchComponent;
  let fixture: ComponentFixture<CanRecentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanRecentSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanRecentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
