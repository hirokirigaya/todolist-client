import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ]
})
export class InputComponent implements OnInit {
  @Input() label: string | null = null;
  @Input() placeholder: string | null = null;
  @Input() isPassword: boolean = false;
  @Input() type: string = 'text';

  newType: string = 'text';
  
  ngOnInit(): void {
    this.newType = this.isPassword ? 'password' : this.type;
  }

  togglePasswordType(): void {
    this.newType = this.newType === 'text' ? 'password' : 'text';
  }
}
