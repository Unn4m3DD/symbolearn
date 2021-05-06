import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMorseComponent } from './learn-morse.component';

describe('LearnMorseComponent', () => {
  let component: LearnMorseComponent;
  let fixture: ComponentFixture<LearnMorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
