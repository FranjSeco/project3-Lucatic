import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { DisplayComponent } from './components/display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CardComponent } from './components/card/card.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DisplayComponent,
    LoginComponent,
    FormularioComponent,
    CardComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
