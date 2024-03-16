import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  loading: boolean = false;

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
            this.loading = false;
            this.toastr.success('Conta criada com sucesso!', 'Sucesso');
            this.router.navigate(['/login']);
          },
          error: (err) => {
            this.loading = false;
            this.toastr.error(
              err?.error?.message ?? 'Não foi possível criar conta.',
              'Error'
            );
          },
        });
    }
  }
}
