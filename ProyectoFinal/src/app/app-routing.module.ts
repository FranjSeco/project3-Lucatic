import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { DisplayComponent } from './components/display/display.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CardComponent } from './components/card/card.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'card', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
