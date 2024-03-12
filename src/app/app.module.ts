import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/pages/login/login.component';
import { ButtonToggleThemeComponent } from './components/reusables/button-toggle-theme/button-toggle-theme.component';
import { ButtonComponent } from './components/reusables/button/button.component';
import { InputComponent } from './components/reusables/input/input.component';
import { EyeComponent } from './components/svgs/eye/eye.component';
import { EyeOffComponent } from './components/svgs/eye-off/eye-off.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonToggleThemeComponent,
    ButtonComponent,
    InputComponent,
    EyeComponent,
    EyeOffComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
