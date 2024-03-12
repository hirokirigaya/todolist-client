import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() control: FormControl = new FormControl();
  @Input() required: 'true' | 'false' = 'false';
  @Input() submitted: boolean = false;

  newType: string = 'text';

  errorMessages: Record<string, string> = {
    required: 'Campo obrigatório.',
    email: 'E-mail inválido.'
  }
  
  ngOnInit(): void {
    this.newType = this.isPassword ? 'password' : this.type;
  }

  togglePasswordType(): void {
    this.newType = this.newType === 'text' ? 'password' : 'text';
  }
}
