import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeOffIconComponent } from './eye-off-icon.component';

describe('EyeOffIconComponent', () => {
  let component: EyeOffIconComponent;
  let fixture: ComponentFixture<EyeOffIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeOffIconComponent]
    });
    fixture = TestBed.createComponent(EyeOffIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
