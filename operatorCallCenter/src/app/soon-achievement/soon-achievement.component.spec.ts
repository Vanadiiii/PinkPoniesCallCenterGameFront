import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonAchievementComponent } from './soon-achievement.component';

describe('SoonAchievementComponent', () => {
  let component: SoonAchievementComponent;
  let fixture: ComponentFixture<SoonAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoonAchievementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoonAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
