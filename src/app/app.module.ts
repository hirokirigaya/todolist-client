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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonToggleThemeComponent,
    ButtonComponent,
    InputComponent,
    EyeComponent,
    EyeOffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
