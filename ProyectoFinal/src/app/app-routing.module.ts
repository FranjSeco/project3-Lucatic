import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { DisplayComponent } from './components/display/display.component';

<<<<<<< HEAD
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'display', component: DisplayComponent },
];
=======
const routes: Routes = [{ path: 'register', component: RegisterComponent }];
>>>>>>> 523c5388bf5638f60a3d0b74337ce1fe6c2d4e69

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
