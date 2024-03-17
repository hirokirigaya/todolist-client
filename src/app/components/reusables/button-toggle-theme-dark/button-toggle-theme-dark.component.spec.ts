import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleThemeDarkComponent } from './button-toggle-theme-dark.component';

describe('ButtonToggleThemeDarkComponent', () => {
  let component: ButtonToggleThemeDarkComponent;
  let fixture: ComponentFixture<ButtonToggleThemeDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonToggleThemeDarkComponent]
    });
    fixture = TestBed.createComponent(ButtonToggleThemeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
