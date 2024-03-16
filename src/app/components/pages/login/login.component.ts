import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  loading: boolean = false;

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.loginFormGroup.invalid) return;
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
            this.loading = false;
            this.router.navigate(['/']);
          },
          error: (err) => {
            this.loading = false;
            this.toastr.error(
              err?.error?.message ?? 'E-mail é/ou senha incorreto(s).',
              'Error'
            );
          },
        });
    }
  }
}
