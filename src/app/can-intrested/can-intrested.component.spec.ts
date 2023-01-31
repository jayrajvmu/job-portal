import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanIntrestedComponent } from './can-intrested.component';

describe('CanIntrestedComponent', () => {
  let component: CanIntrestedComponent;
  let fixture: ComponentFixture<CanIntrestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanIntrestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanIntrestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
