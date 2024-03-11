import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleThemeComponent } from './button-toggle-theme.component';

describe('ButtonToggleThemeComponent', () => {
  let component: ButtonToggleThemeComponent;
  let fixture: ComponentFixture<ButtonToggleThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonToggleThemeComponent]
    });
    fixture = TestBed.createComponent(ButtonToggleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
