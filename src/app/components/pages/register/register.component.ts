import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loading: boolean = false;
  error: {
    error: boolean;
    message: string;
  } = {
    error: false,
    message: '',
  };

  registerFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.registerFormGroup.invalid) return;
    this.loading = true;

    if (
      this.registerFormGroup.value.username &&
      this.registerFormGroup.value.email &&
      this.registerFormGroup.value.password &&
      this.registerFormGroup.value.confirm_password
    ) {
      this.authService
        .register({
          username: this.registerFormGroup.value.username,
          email: this.registerFormGroup.value.email,
          password: this.registerFormGroup.value.password,
          confirm_password: this.registerFormGroup.value.confirm_password,
        })
        .subscribe({
          next: (data) => {
            this.error = {
              error: false,
              message: '',
            };
            // this.router.navigate(['/']);
            console.log(data)
          },
          error: (err) =>
            (this.error = {
              error: true,
              message: err?.error?.message ?? 'Não foi possível criar conta.',
            }),
          complete: () => (this.loading = false),
        });
    }
  }
}
