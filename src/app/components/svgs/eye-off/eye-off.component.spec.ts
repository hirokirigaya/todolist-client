import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeOffComponent } from './eye-off.component';

describe('EyeOffComponent', () => {
  let component: EyeOffComponent;
  let fixture: ComponentFixture<EyeOffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeOffComponent]
    });
    fixture = TestBed.createComponent(EyeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
