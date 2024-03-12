import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}


  loading: boolean = false;
  error: {
    error: boolean;
    message: string;
  } = {
    error: false,
    message: '',
  };

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.loginFormGroup.invalid) return;
    console.log(this.loginFormGroup.value);
    this.loading = true;
    if (this.loginFormGroup.value.email && this.loginFormGroup.value.password) {
      this.authService
        .login({
          email: this.loginFormGroup.value.email,
          password: this.loginFormGroup.value.password,
        })
        .pipe(first())
        .subscribe({
          next: (data) => {
            this.error = {
              error: false,
              message: '',
            };
            window.location.href = '/'
          },
          error: (err) =>
            (this.error = {
              error: true,
              message: err?.error?.message ?? 'E-mail é/ou senha incorreto(s).',
            }),
          complete: () => (this.loading = false),
        });
    }
  }
}
