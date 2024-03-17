import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/pages/login/login.component';
import { ButtonToggleThemeComponent } from './components/reusables/button-toggle-theme/button-toggle-theme.component';
import { ButtonComponent } from './components/reusables/button/button.component';
import { InputComponent } from './components/reusables/input/input.component';
import { EyeIconComponent } from './components/svgs/eye-icon/eye-icon.component';
import { EyeOffIconComponent } from './components/svgs/eye-off-icon/eye-off-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { MenuIconComponent } from './components/svgs/menu-icon/menu-icon.component';
import { LogoutIconComponent } from './components/svgs/logout-icon/logout-icon.component';
import { ButtonToggleThemeDarkComponent } from './components/reusables/button-toggle-theme-dark/button-toggle-theme-dark.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonToggleThemeComponent,
    ButtonComponent,
    InputComponent,
    EyeIconComponent,
    EyeOffIconComponent,
    HomeComponent,
    RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    ContainerComponent,
    MenuIconComponent,
    LogoutIconComponent,
    ButtonToggleThemeDarkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
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
