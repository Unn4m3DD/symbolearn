import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageFinalComponent } from './add-language-final.component';

describe('AddLanguageFinalComponent', () => {
  let component: AddLanguageFinalComponent;
  let fixture: ComponentFixture<AddLanguageFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguageFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLanguageFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
