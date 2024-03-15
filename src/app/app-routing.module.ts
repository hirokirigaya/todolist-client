import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/']);
        } else {
          if (
            !event.url?.includes('register') &&
            !event.url?.includes('login')
          ) {
            this.router.navigate(['/login']);
          }
        }
      }
    });
  }
}
